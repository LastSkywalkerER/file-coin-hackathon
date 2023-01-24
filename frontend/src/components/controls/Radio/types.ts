import { FormControlLabelProps } from '@mui/material'

export interface Props extends Omit<FormControlLabelProps, 'control'> {
  classPadding?: string
  isItemChecked?: boolean
}
