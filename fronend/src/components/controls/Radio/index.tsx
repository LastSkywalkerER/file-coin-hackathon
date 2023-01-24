import { FormControlLabel, Radio } from '@mui/material'
import clsx from 'clsx'
import React, { ForwardedRef } from 'react'

import { useClasses } from './styles'
import { Props } from './types'

const RadioButtonComponent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  props: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { className: radioClass, checked, isItemChecked, classPadding, ...restProps } = props

  const { classes } = useClasses()

  return (
    <FormControlLabel
      {...restProps}
      ref={ref}
      control={<Radio color="primary" classes={{ root: classes.root }} className={classes.radio} />}
      className={clsx(classes.radio, radioClass)}
      classes={{ root: classPadding }}
      checked={checked || isItemChecked}
    />
  )
}

export const RadioButton = React.memo(React.forwardRef(RadioButtonComponent))
