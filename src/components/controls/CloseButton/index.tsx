import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'
import React from 'react'

import { useClasses } from './styles'
import { Props } from './types'

const CloseButtonComponent = (props: Props): React.ReactElement => {
  const { absolute = false, className, ...restProps } = props

  const { classes } = useClasses()

  return (
    <IconButton
      size="small"
      className={clsx(classes.closeButton, { [classes.closeButtonAbsolute]: absolute }, className)}
      {...restProps}
    >
      <CloseIcon className={classes.icon} />
    </IconButton>
  )
}

export const CloseButton = React.memo(CloseButtonComponent)
