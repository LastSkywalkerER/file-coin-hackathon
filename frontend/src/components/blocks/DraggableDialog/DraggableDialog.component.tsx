import { Dialog, Paper, PaperProps, Typography } from '@mui/material'
import React, { FC, useCallback, useContext } from 'react'
import Draggable from 'react-draggable'

import { LoadingOverlay } from '@/components/blocks'
import { CloseButton } from '@/components/controls'

import { DialogContext } from './DraggableDialog.context'
import { useClasses } from './DraggableDialog.styles'
import { DraggableDialogProps } from './DraggableDialog.types'

const PaperComponent: FC<PaperProps> = React.memo((props: PaperProps) => {
  const { id } = useContext(DialogContext)

  const dialogId = `#draggable-dialog-title-${id || 'handle'}`

  return (
    <Draggable handle={dialogId} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
})

const DraggableDialogComponent: FC<DraggableDialogProps> = (props: DraggableDialogProps) => {
  const { title, children, handleApply, isLoading, withoutCloseIcon = false, ...rest } = props

  const { classes } = useClasses()

  const dialogId = `draggable-dialog-title-${rest.id || 'handle'}`

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (handleApply) {
        if (event.key === 'Enter') {
          handleApply()
        }
      }
    },
    [handleApply],
  )

  const handleClose = useCallback((event: React.MouseEvent) => {
    rest?.onClose && rest.onClose(event, 'backdropClick')
  }, [])

  return (
    <DialogContext.Provider value={{ id: rest.id }}>
      <Dialog
        {...rest}
        PaperComponent={PaperComponent}
        onKeyPress={handleKeyPress}
        aria-labelledby={dialogId}
      >
        <LoadingOverlay active={!!isLoading} loaded>
          <div id={dialogId} className={classes.draggableHandle} />
          {!withoutCloseIcon && <CloseButton onClick={handleClose} absolute />}
          <Paper className={classes.paper}>
            {title && (
              <Typography variant="h3" className={classes.modalTitle}>
                {title}
              </Typography>
            )}
            {children}
          </Paper>
        </LoadingOverlay>
      </Dialog>
    </DialogContext.Provider>
  )
}

export const DraggableDialog = React.memo(DraggableDialogComponent)
