import { Typography } from '@mui/material'
import React, { FC } from 'react'

import { useTranslate } from '@/utils/internalization'

import { DraggableDialog } from '../DraggableDialog'
import { Loader } from '../Loader'
import { useClasses } from './styles'
import { Props } from './types'

export const LoadingModal: FC<Props> = React.memo((props: Props) => {
  const { placeholder, styles } = props

  const { classes } = useClasses()
  const translate = useTranslate()

  return (
    <DraggableDialog
      maxWidth="xs"
      open
      disableEscapeKeyDown
      withoutCloseIcon
      style={{ zIndex: styles?.zIndex || 2000 }}
    >
      <div className={classes.wrapper}>
        <Typography variant="h6" className={classes.title}>
          {placeholder || translate('translate#vault.BusyIndicatorText')}
        </Typography>
        <Loader />
      </div>
    </DraggableDialog>
  )
})
