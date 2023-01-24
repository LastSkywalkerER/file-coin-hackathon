import { DesktopDatePickerProps } from '@mui/x-date-pickers'
import { Moment } from 'moment'

export interface DateInputProps
  extends Omit<
    DesktopDatePickerProps<Moment, Moment>,
    'renderInput' | 'onChange' | 'maxDate' | 'minDate' | 'value'
  > {
  disableFutureDates?: boolean
  disabledPast?: boolean
  required?: boolean
  error?: boolean
  errorText?: string | React.ReactElement
  format?: string

  maxDate?: string
  minDate?: string
  onChange: (keyboardInputValue: string | null) => void
  value: string | null
}
