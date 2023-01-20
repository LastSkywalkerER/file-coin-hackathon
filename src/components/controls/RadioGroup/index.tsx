import { RadioGroup as MuiRadioGroup, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { ForwardedRef } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { RadioButton } from '@/components/controls'
import { useTranslate } from '@/utils/internalization'

import { useClasses } from './styles'
import { RadioGroupPropsField } from './types'

const RadioGroupComponent: React.ForwardRefRenderFunction<unknown, RadioGroupPropsField> = (
  props: RadioGroupPropsField,
  ref: ForwardedRef<unknown>,
) => {
  const {
    label,
    required,
    options,
    disabled,
    isColumn,
    classPadding,
    className,
    wrapperClassName,
    error,
    value,
    ...restProps
  } = props

  const translate = useTranslate()
  const { classes } = useClasses()

  return (
    <div className={clsx(classes.wrapper, { [classes.error]: error }, wrapperClassName)}>
      {label && (
        <Typography className={classes.title} variant="body1">
          {label}&nbsp;
          {required && <span className={classes.asterisk}>*</span>}
        </Typography>
      )}
      <MuiRadioGroup
        {...restProps}
        value={value || ''}
        ref={ref}
        className={clsx(classes.radioGroup, className, {
          [classes.radioGroupVertical]: isColumn,
        })}
      >
        {options.map(
          (option): React.ReactElement => (
            <RadioButton
              key={option.value}
              value={option.value}
              label={option.label || translate(`translate#title.${option.value}`)}
              disabled={disabled}
              isItemChecked={option.checked}
              classPadding={classPadding}
            />
          ),
        )}
      </MuiRadioGroup>
    </div>
  )
}

export const RadioGroup = React.memo(React.forwardRef(RadioGroupComponent))

export const RadioGroupControl = <T extends FieldValues>(
  props: UseControllerProps<T> & RadioGroupPropsField,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: restProps.required, ...rules }}
      render={({ field, fieldState: { error } }) => (
        <RadioGroup {...field} {...restProps} error={!!error} />
      )}
    />
  )
}
