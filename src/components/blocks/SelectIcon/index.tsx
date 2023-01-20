import ExpandMore from '@mui/icons-material/ExpandMore'
import { SvgIconProps } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

import { useClasses } from './styles'

export const SelectIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  const { className, ...restProps } = props

  const { classes } = useClasses()

  return <ExpandMore className={clsx(classes.icon, className)} {...restProps} />
}
