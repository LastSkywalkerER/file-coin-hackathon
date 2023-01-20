import { Checkbox as MuiCheckbox, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { ForwardedRef } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { useClasses } from './styles'
import { Props } from './types'

const CheckboxComponent: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props: Props,
  ref: ForwardedRef<HTMLButtonElement>,
): React.ReactElement => {
  const {
    label,
    withLabel = true,
    error,
    width,
    className,
    disabled,
    onChange,
    onClickLabel,
    onClickCheckbox,
    ...restProps
  } = props

  const { classes } = useClasses({ width })

  const checkboxProps = {
    ref,
    checked: !!restProps.value,
    disabled,
    ...restProps,
    onChange,
    onClick: onClickCheckbox,
  }

  return withLabel ? (
    <label
      className={clsx(classes.label, className, { [classes.disabled]: disabled })}
      onClick={onClickLabel}
    >
      <MuiCheckbox classes={{ root: classes.checkbox }} {...checkboxProps} />
      <Typography className={clsx({ [classes.errorText]: error })} variant="body2">
        {label}
      </Typography>
    </label>
  ) : (
    <MuiCheckbox
      classes={{ root: classes.checkbox }}
      className={clsx(classes.solo, className)}
      {...checkboxProps}
    />
  )
}

export const Checkbox = React.memo(React.forwardRef(CheckboxComponent))

export const CheckboxControl = <T extends FieldValues>(props: UseControllerProps<T> & Props) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: restProps.required, ...rules }}
      render={({ field, fieldState: { error } }) => (
        <Checkbox {...field} {...restProps} error={!!error} />
      )}
    />
  )
}
