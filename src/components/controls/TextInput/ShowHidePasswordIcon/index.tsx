import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, { FC } from 'react'

import { useClasses } from './styles'
import { Props } from './types'

export const ShowHidePasswordIcon: FC<Props> = React.memo((props: Props) => {
  const { showPassword, handleShowPasswordIcon } = props

  const { classes } = useClasses()

  return showPassword ? (
    <VisibilityOff className={classes.icon} onClick={handleShowPasswordIcon} />
  ) : (
    <Visibility className={classes.icon} onClick={handleShowPasswordIcon} />
  )
})
