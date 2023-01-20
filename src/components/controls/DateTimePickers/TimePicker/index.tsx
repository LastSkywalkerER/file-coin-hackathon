import MomentDateAdapter from '@date-io/moment'
import { DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import moment, { Moment } from 'moment'
import React, { useMemo } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { TIME_FORMAT } from '@/constants/time'
import { generateErrorText } from '@/helpers/generateErrorText'
import { ValidationService } from '@/utils/services/validationService'

import { TextInput } from '../..'
import { useClasses } from './styles'
import { TimeInputProps } from './types'

const TimeInputComponent: React.ForwardRefRenderFunction<HTMLDivElement, TimeInputProps> = (
  props,
  ref,
): React.ReactElement => {
  const { error, errorText, format, onChange, value, ...restProps } = props

  const { classes } = useClasses()

  const defaultFormat = useMemo(() => format || TIME_FORMAT, [format])

  const handleChange = (value: Moment | null) => {
    onChange(moment(value).format(TIME_FORMAT))
  }

  return (
    <LocalizationProvider dateAdapter={MomentDateAdapter} dateLibInstance={moment}>
      <DesktopTimePicker
        {...restProps}
        ref={ref}
        onChange={handleChange}
        value={moment(value, TIME_FORMAT)}
        // rifmFormatter={rifmFormatter} // @TODO mask
        ampm={false}
        renderInput={(params) => <TextInput {...params} error={error} errorText={errorText} />}
        inputFormat={defaultFormat}
        InputAdornmentProps={{ className: classes.icon }}
      />
    </LocalizationProvider>
  )
}

export const TimeInput = React.memo(React.forwardRef(TimeInputComponent))

export const TimePickerControl = <T extends FieldValues>(
  props: UseControllerProps<T> & Omit<TimeInputProps, 'onChange' | 'value'>,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        validate: {
          time: ValidationService.isTimeValid,
        },
        ...rules,
      }}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <TimeInput
          {...restField}
          {...restProps}
          value={value}
          error={!!error}
          errorText={generateErrorText(error)}
        />
      )}
    />
  )
}
