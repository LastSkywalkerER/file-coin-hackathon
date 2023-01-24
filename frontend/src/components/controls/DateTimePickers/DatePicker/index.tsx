import MomentDateAdapter from '@date-io/moment'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { IconButton } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import moment, { Moment } from 'moment'
import React, { useMemo, useState } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { DEFAULT_DATE_FORMAT } from '@/constants/time'
import { generateErrorText } from '@/helpers/generateErrorText'
import { ValidationService } from '@/utils/services/validationService'

import { TextInput } from '../..'
import { useClasses } from './styles'
import { DateInputProps } from './types'

const DateInputComponent: React.ForwardRefRenderFunction<HTMLDivElement, DateInputProps> = (
  props,
  ref,
): React.ReactElement => {
  const {
    disableFutureDates,
    disablePast,
    error,
    errorText,
    maxDate,
    minDate,
    format,
    onChange,
    value,
    ...restProps
  } = props

  const { classes } = useClasses()

  const [opened, setOpened] = useState(false)

  const defaultFormat = useMemo(() => format || DEFAULT_DATE_FORMAT, [format])
  const formatForMask = useMemo(() => moment().format(defaultFormat), [defaultFormat])

  const dateMask = useMemo(() => {
    return formatForMask && formatForMask.replace(/[A-Za-z]/g, '_').replace(/[0-9]/g, '_')
  }, [formatForMask])

  const handleChange = (value: Moment | null) => {
    onChange(moment(value).format())
  }

  const handleOpen = () => {
    setOpened((oldOpened) => !oldOpened)
  }

  const CalendarButton = (
    <IconButton disabled={restProps.disabled} className={classes.icon} onClick={handleOpen}>
      <CalendarMonthIcon />
    </IconButton>
  )

  return (
    <LocalizationProvider dateAdapter={MomentDateAdapter} dateLibInstance={moment}>
      <DesktopDatePicker
        {...restProps}
        ref={ref}
        onChange={handleChange}
        value={moment(value)}
        // rifmFormatter={rifmFormatter} @TODO mask
        maxDate={maxDate || disableFutureDates ? moment() : undefined}
        minDate={minDate || disablePast ? moment() : undefined}
        renderInput={(props) => (
          <TextInput
            {...props}
            InputProps={{ endAdornment: CalendarButton }}
            error={error}
            errorText={errorText}
          />
        )}
        open={opened}
        onClose={handleOpen}
        mask={dateMask}
        inputFormat={defaultFormat}
      />
    </LocalizationProvider>
  )
}

export const DateInput = React.memo(React.forwardRef(DateInputComponent))

export const DatePickerControl = <T extends FieldValues>(
  props: UseControllerProps<T> & Omit<DateInputProps, 'onChange' | 'value'>,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        validate: {
          date: ValidationService.isDateValid,
        },
        ...rules,
      }}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <DateInput
          {...restField}
          {...restProps}
          value={value || ''}
          error={!!error}
          errorText={generateErrorText(error)}
        />
      )}
    />
  )
}
