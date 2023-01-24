import { DateInputProps } from '../DatePicker/types'

export interface DateTimeInputProps
  extends Omit<
    DateInputProps,
    'onError' | 'onViewChange' | 'openTo' | 'views' | 'getOpenDialogAriaText' | 'format'
  > {
  dateError?: string | React.ReactElement
  timeError?: string | React.ReactElement

  tabIndex?: number

  dateLabel?: string
  timeLabel?: string

  classes?: {
    datePicker?: string
    timePicker?: string
  }
}
