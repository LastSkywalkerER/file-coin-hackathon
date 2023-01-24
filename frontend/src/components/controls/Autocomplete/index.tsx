import {
  Autocomplete as MuiAutocomplete,
  AutocompleteRenderInputParams,
  Box,
  TextField,
} from '@mui/material'
import React, { ForwardedRef, ReactElement, useMemo, useState } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { Loader } from '@/components/blocks'
import { SelectIcon } from '@/components/blocks/SelectIcon'
import { Option } from '@/types'
import { removeNoneItem } from '@/utils/arrays'
import { useTranslate } from '@/utils/internalization'

import { useClasses } from './styles'
import { Props } from './types'

const getOptionLabel = (option: Option): string => option.name || ''
const DropDownIcon = <SelectIcon />

const AutocompleteComponent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  props: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const {
    options,
    label,
    required = false,
    className,
    isLoading = false,
    disabled = false,
    value,
    isOptionEqualToValue,
    onInputChange,
    withNoneOption = false,
    ...restProps
  } = props

  const translate = useTranslate()
  const { classes } = useClasses()

  const [inputValue, setInputValue] = useState('')

  const noneOption = useMemo(
    () => ({
      name: withNoneOption ? translate('translate#title.none') : '',
      value: withNoneOption ? 'none' : '',
    }),
    [],
  )
  const localDisabled = useMemo(() => isLoading || disabled, [isLoading, disabled])
  const optionWithoutNone = useMemo(() => removeNoneItem(options), [options])

  const autoOptions = useMemo(
    () => (disabled && !value ? [noneOption] : optionWithoutNone),
    [disabled, value, optionWithoutNone],
  )
  const autoValue = useMemo(
    () =>
      disabled && !value
        ? noneOption
        : optionWithoutNone.find((option: Option) => option.value === value),
    [optionWithoutNone, value, disabled],
  )

  const SelectLoader = <Loader className={classes.loader} inline />

  const isInternalOptionEqualToValue = (option: Option, value: Option) => {
    if (isOptionEqualToValue) {
      return isOptionEqualToValue(option, value)
    }

    return option.value === value.value
  }

  return (
    <MuiAutocomplete
      size="small"
      classes={{ endAdornment: classes.endAdornment }}
      value={autoValue || noneOption}
      onChange={(event, newValue) => {
        const { value } = newValue || {}

        onInputChange && onInputChange(value && value !== 'none' ? value : '')
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      isOptionEqualToValue={isInternalOptionEqualToValue}
      className={className}
      getOptionLabel={getOptionLabel}
      options={[noneOption, ...autoOptions]}
      disabled={localDisabled}
      renderOption={(props, option) => (
        <Box component="li" style={{ opacity: option.value === 'none' ? 0.5 : 1 }} {...props}>
          {option.name}
        </Box>
      )}
      popupIcon={isLoading ? SelectLoader : DropDownIcon}
      renderInput={(params: AutocompleteRenderInputParams): ReactElement => (
        <TextField
          {...restProps}
          {...params}
          ref={ref}
          required={required}
          label={label}
          InputLabelProps={{ ...params.InputLabelProps }}
          disabled={localDisabled}
        />
      )}
    />
  )
}

export const Autocomplete = React.memo(React.forwardRef(AutocompleteComponent))

export const AutocompleteControl = <T extends FieldValues>(
  props: UseControllerProps<T> & Props,
) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        ...rules,
      }}
      render={({ field: { onChange, ...restField }, fieldState: { error } }) => {
        const internalOnChange = (value: string) => {
          onChange(value)
        }

        return (
          <Autocomplete
            {...restField}
            {...restProps}
            onInputChange={internalOnChange}
            error={!!error}
          />
        )
      }}
    />
  )
}
