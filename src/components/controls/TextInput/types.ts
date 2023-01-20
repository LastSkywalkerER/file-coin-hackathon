import { TextFieldProps } from '@mui/material'

interface CustomProps {
  shrink?: boolean
  displayError?: boolean
  clearButton?: boolean
  fieldName?: string
  pattern?: RegExp
  disabledKeys?: string[]
  styles?: {
    fontInput?: string
    field?: string
  }
  customClasses?: {
    errorText?: string
  }
  error?: boolean
  errorText?: string | React.ReactElement
  isHidden?: boolean
  hint?: string
  isShowHideIcon?: boolean
  forbiddenCharactersRegExp?: RegExp
  withoutHelperText?: boolean
}

export type Props = TextFieldProps & CustomProps
