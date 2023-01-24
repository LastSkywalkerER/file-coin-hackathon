import { CheckboxProps } from '@mui/material/Checkbox'
import React from 'react'

export interface Props extends CheckboxProps {
  label?: string
  withLabel?: boolean
  error?: boolean
  width?: string
  styles?: {
    label?: string
  }
  sameAddress?: boolean
  onClickLabel?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
  onClickCheckbox?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
