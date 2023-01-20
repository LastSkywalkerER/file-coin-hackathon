import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material'
import clsx from 'clsx'
import React, { ForwardedRef } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { Loader } from '@/components/blocks/Loader'
import { SelectIcon } from '@/components/blocks/SelectIcon'
import { generateErrorText } from '@/helpers/generateErrorText'
import { useTranslate } from '@/utils/internalization'

import { useClasses } from './styles'
import { Props, TypesForSelect } from './types'

const SelectComponent = (props: Props, ref: ForwardedRef<unknown>) => {
  const {
    label,
    options,
    placeholder,
    disabled,
    className,
    hideEmptyItem = false,
    isLoading = false,
    shrink,
    required = false,
    error,
    displayError = true,
    withoutHelperText = false,
    errorText,
    classes: selectClasses,
    IconComponent,
    value,

    ...restProps
  } = props

  const { classes } = useClasses()
  const translate = useTranslate()

  const SelectLoader = () => <Loader className={classes.loader} inline />

  return (
    <>
      <FormControl
        error={error}
        size="small"
        required={required}
        disabled={isLoading || disabled}
        className={clsx(classes.select, { [classes.disabled]: disabled }, className)}
        variant="outlined"
        classes={{ root: selectClasses?.rootFormControl }}
      >
        {label && (
          <InputLabel className={classes.label} shrink={shrink}>
            {label}
          </InputLabel>
        )}

        <MuiSelect
          ref={ref}
          className={
            placeholder && (value === '' || value === null)
              ? classes.placeholderOption
              : classes.normalOption
          }
          classes={{ select: selectClasses?.root, icon: selectClasses?.icon }}
          IconComponent={isLoading ? SelectLoader : IconComponent || SelectIcon}
          label={label}
          notched={shrink || undefined}
          displayEmpty={shrink}
          MenuProps={{ ...restProps.MenuProps }}
          value={
            (options || []).find(({ value: optionValue }) => optionValue === value)?.value || ''
          }
          {...restProps}
        >
          <MenuItem className={classes.headerItem} disabled>
            {label}
          </MenuItem>
          {!hideEmptyItem && (
            <MenuItem value="" className={classes.placeholderOption}>
              {placeholder || translate('translate#title.none')}
            </MenuItem>
          )}
          {(options || []).map(({ value, name, icon, disabled = false }: TypesForSelect) => (
            <MenuItem
              className={classes.normalOption}
              disabled={disabled}
              key={`${name}${value}`}
              value={value}
            >
              {icon ? (
                <ListItemIcon className={clsx(classes.optionIcon, selectClasses?.icon)}>
                  {icon}
                  <ListItemText primary={name} className={classes.optionName} />
                </ListItemIcon>
              ) : (
                <span className={classes.selectOption}>{name}</span>
              )}
            </MenuItem>
          ))}
        </MuiSelect>
        {!withoutHelperText && (
          <span
            className={clsx({ [classes.showError]: displayError && errorText }, classes.errorLabel)}
          >
            {errorText || ''}
          </span>
        )}
      </FormControl>
    </>
  )
}

export const Select = React.memo(React.forwardRef(SelectComponent))

export const SelectControl = <T extends FieldValues>(props: UseControllerProps<T> & Props) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        ...rules,
      }}
      render={({ field, fieldState: { error } }) => (
        <Select {...field} {...restProps} error={!!error} errorText={generateErrorText(error)} />
      )}
    />
  )
}
