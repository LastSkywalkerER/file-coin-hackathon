import TextField from '@mui/material/TextField'
import clsx from 'clsx'
import React, { ChangeEvent, ForwardedRef, useCallback, useState } from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { generateErrorText } from '@/helpers/generateErrorText'

import { ShowHidePasswordIcon } from './ShowHidePasswordIcon'
import { useClasses } from './styles'
import { Props } from './types'

export const TextInputComponent = (
  props: Props,
  ref: ForwardedRef<HTMLDivElement>,
): React.ReactElement => {
  const {
    type,
    displayError = true,
    errorText,
    error,
    margin,
    className,
    label,
    shrink,
    styles,
    customClasses,
    hint,
    isShowHideIcon,
    autoComplete = 'off',
    forbiddenCharactersRegExp,
    withoutHelperText = false,
    onChange,

    ...restProps
  } = props

  const [valid, setValid] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState(false)

  const { classes } = useClasses()

  const handleShowPasswordIcon = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  const handleTextField = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target

      if (forbiddenCharactersRegExp) {
        const regExp = new RegExp(forbiddenCharactersRegExp)

        if (regExp.test(value) && value !== '') {
          event.preventDefault()
          setValid(false)
          return
        } else {
          setValid(true)
        }
      }

      if (onChange) {
        onChange(event)
      }
    },
    [onChange, forbiddenCharactersRegExp],
  )

  return (
    <div className={clsx(classes.wrapper, styles?.field)}>
      <TextField
        ref={ref}
        size="small"
        type={showPassword && isShowHideIcon ? 'text' : type}
        autoComplete={autoComplete}
        {...restProps}
        className={clsx(className, classes.input, {
          [classes.noMargin]: margin === 'none' && !label,
          [classes.noMarginWithLabel]: margin === 'none' && label,
          [classes.hidden]: restProps.isHidden,
        })}
        label={
          label && restProps.disabled ? <div className={classes.labelDisabled}>{label}</div> : label
        }
        error={error || !valid}
        InputLabelProps={{ shrink }}
        InputProps={
          !restProps.InputProps
            ? {
                className: clsx(classes.fontInput, styles?.fontInput),
                endAdornment: type === 'password' && isShowHideIcon && (
                  <ShowHidePasswordIcon
                    showPassword={showPassword}
                    handleShowPasswordIcon={handleShowPasswordIcon}
                  />
                ),
              }
            : restProps.InputProps
        }
        onChange={handleTextField}
        placeholder={hint}
      />
      {!withoutHelperText && (
        <span
          className={clsx(
            { [classes.showError]: displayError && errorText },
            classes.errorLabel,
            customClasses?.errorText,
          )}
        >
          {errorText || ''}
        </span>
      )}
    </div>
  )
}

export const TextInput = React.memo(React.forwardRef(TextInputComponent))

export const TextInputControl = <T extends FieldValues>(props: UseControllerProps<T> & Props) => {
  const { name, control, rules, ...restProps } = props

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: restProps.required,
        pattern: restProps.forbiddenCharactersRegExp,
        ...rules,
      }}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <TextInput
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
