import moment from 'moment'
import React, { useEffect, useMemo, useState } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { DEFAULT_DATE_FOR_PICKER, TIME_FORMAT } from '@/constants/time'
import { generateErrorText } from '@/helpers/generateErrorText'
import { useTranslate } from '@/utils/internalization'
import { ValidationService } from '@/utils/services/validationService'

import { DateInput, TimeInput } from '..'
import { DateTimeInputProps } from './types'

const DateTimeInputComponent: React.ForwardRefRenderFunction<HTMLDivElement, DateTimeInputProps> = (
  props,
  ref,
): React.ReactElement => {
  const {
    onChange,
    value,
    errorText,
    error,
    tabIndex,
    className,
    dateLabel,
    timeLabel,
    classes: externalClasses,
    ...restProps
  } = props

  const translate = useTranslate()

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    if (moment(value).isValid()) {
      setDate(moment(value).format(DEFAULT_DATE_FOR_PICKER))
      setTime(moment(value).format(TIME_FORMAT))
    }
  }, [value])

  const handleDateChange = (date: string | null) => {
    const localDate = moment(date).format(DEFAULT_DATE_FOR_PICKER)
    let localTime = time

    if (moment(localDate).isValid() && !moment(localTime, TIME_FORMAT).isValid()) {
      localTime = moment()
        .set({ hour: 0, minutes: 0, second: 0, millisecond: 0 })
        .format(TIME_FORMAT)
    }

    onChange(moment(`${localDate} ${localTime}`).format())
    setDate(localDate || '')
    setTime(localTime || '')
  }

  const handleTimeChange = (time: string | null) => {
    let localDate = date

    if (moment(time, TIME_FORMAT).isValid() && !moment(localDate).isValid()) {
      localDate = moment().format(DEFAULT_DATE_FOR_PICKER)
    }

    onChange(moment(`${localDate} ${time}`).format())
    setTime(time || '')
    setDate(localDate || '')
  }

  const isDateValid = useMemo(
    () => (date ? moment(date, DEFAULT_DATE_FOR_PICKER).isValid() : true),
    [date],
  )
  const isTimeValid = useMemo(() => (time ? moment(time, TIME_FORMAT).isValid() : true), [time])

  const isDateError = !isDateValid && error
  const isTimeError = !isTimeValid && error
  const isCommonError = isDateValid && isTimeValid && error

  return (
    <div ref={ref} className={className}>
      <DateInput
        {...restProps}
        label={
          dateLabel ||
          (tabIndex ? translate(`translate#title.dateTo`) : translate(`translate#title.dateFrom`))
        }
        onChange={handleDateChange}
        value={date}
        errorText={isDateError || isCommonError ? errorText : ''}
        className={externalClasses?.datePicker}
        error={!!(isDateError || isCommonError)}
      />
      <TimeInput
        label={
          timeLabel ||
          (tabIndex ? translate(`translate#title.timeTo`) : translate(`translate#title.timeFrom`))
        }
        {...restProps}
        onChange={handleTimeChange}
        value={time}
        errorText={isTimeError || isCommonError ? errorText : ''}
        className={externalClasses?.timePicker}
        error={!!(isTimeError || isCommonError)}
      />
    </div>
  )
}

export const DateTimeInput = React.memo(React.forwardRef(DateTimeInputComponent))

export const DateTimePickerControl = <T extends FieldValues>(
  props: UseControllerProps<T> & Omit<DateTimeInputProps, 'onChange' | 'value'>,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        validate: {
          dateTime: ValidationService.isDateTimeValid,
        },
        ...rules,
      }}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <DateTimeInput
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
