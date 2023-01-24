import { DialogProps } from '@mui/material'
import { ReactElement } from 'react'

export interface DraggableDialogProps extends Omit<DialogProps, 'title'> {
  title?: string | ReactElement
  handleApply?: () => void
  isLoading?: boolean
  withoutCloseIcon?: boolean
}
