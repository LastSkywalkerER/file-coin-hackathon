// import MuiButton from '@mui/material/Button'
import MuiButton from '@mui/material/Button'
import clsx from 'clsx'
import {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { Loader } from '@/components/blocks/Loader'

import { LightTooltip, useClasses } from './styles'
import { ConditionalButtonTooltipWrapperProps, Props } from './types'
import { useGenerateStyles } from './useGenerateStyles'

const ConditionalButtonTooltipWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalButtonTooltipWrapperProps) => (condition ? wrapper(children) : children)

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement | null, Props> = (
  props: Props,
  ref,
) => {
  const {
    fullWidth = false,
    disableRipple = true,
    width,
    className,
    tooltipTitle = '',
    palette,
    isLoading,
    disabled,
    children,
    ...restProps
  } = props

  const { classes } = useClasses()

  const generatedClasses = useGenerateStyles({
    fullWidth,
    width,
    palette,
    variant: restProps.variant,
  })

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
    ref,
    () => buttonRef?.current,
    [buttonRef?.current],
  )

  const [minWidth, setMinWidth] = useState<number | undefined>()

  useEffect(() => {
    if (buttonRef.current && !minWidth) {
      if (buttonRef.current.clientWidth > 64) {
        setMinWidth(buttonRef.current.clientWidth)
      }
    }
  }, [buttonRef.current])

  return (
    <ConditionalButtonTooltipWrapper
      condition={tooltipTitle.length > 0 && !disabled && !isLoading}
      wrapper={(children: React.ReactElement) => (
        <LightTooltip title={tooltipTitle} arrow placement="top">
          {children}
        </LightTooltip>
      )}
    >
      <MuiButton
        size="large"
        disableRipple={disableRipple}
        ref={buttonRef}
        disabled={disabled || isLoading}
        style={{ width: minWidth }}
        className={clsx(classes.button, generatedClasses, className)}
        {...restProps}
      >
        {!isLoading ? children : <Loader className={classes.loader} inline />}
      </MuiButton>
    </ConditionalButtonTooltipWrapper>
  )
}

export const Button = memo(forwardRef(ButtonComponent))
