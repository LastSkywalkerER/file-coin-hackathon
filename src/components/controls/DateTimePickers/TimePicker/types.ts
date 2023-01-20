import { DesktopTimePickerProps } from '@mui/x-date-pickers'
import { Moment } from 'moment'

export interface TimeInputProps
  extends Omit<DesktopTimePickerProps<Moment, Moment>, 'renderInput' | 'onChange' | 'value'> {
  required?: boolean
  error?: boolean
  errorText?: string | React.ReactElement
  format?: string

  onChange: (keyboardInputValue: string | null) => void
  value: string | null
}
