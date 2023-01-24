import { RadioGroupProps } from '@mui/material'

export interface RadioGroupObjectValues {
  value: string
  label?: string
  checked?: boolean
}

export interface RadioGroupPropsField extends RadioGroupProps {
  options: RadioGroupObjectValues[]
  disabled?: boolean
  checked?: boolean
  classPadding?: string
  classGroup?: string
  label?: string
  required?: boolean
  isColumn?: boolean
  defaultValue?: string
  wrapperClassName?: string
  error?: boolean
}
