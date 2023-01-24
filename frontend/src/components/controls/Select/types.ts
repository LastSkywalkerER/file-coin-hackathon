import { SelectProps } from '@mui/material/Select'

export interface TypesForSelect {
  disabled?: boolean
  name: string
  value: string
  icon?: React.ReactNode
}

export interface Props extends SelectProps {
  label?: string
  isLoading?: boolean
  options: Array<TypesForSelect>
  hideEmptyItem?: boolean
  placeholder?: string
  shrink?: boolean
  error?: boolean
  fontSize?: string
  errorText?: string | React.ReactElement
  displayError?: boolean
  withoutHelperText?: boolean
  disabled?: boolean
  classes?: {
    root?: string
    icon?: string
    rootFormControl?: string
  }
  clearButton?: boolean
  parameterName?: string
  clearField?: () => void
}
