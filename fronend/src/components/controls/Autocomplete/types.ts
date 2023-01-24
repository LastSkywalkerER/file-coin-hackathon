import { TextFieldProps } from '@mui/material'

import { Option } from '@/types'

interface CustomCompleteProps {
  options: Option[]
  label: string
  required?: boolean
  className?: string
  isLoading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  withNoneOption?: boolean

  inputValue?: string
  onInputChange?: (value: string) => void
  isOptionEqualToValue?: (option: Option, value: Option) => boolean
}

export type Props = TextFieldProps & CustomCompleteProps
