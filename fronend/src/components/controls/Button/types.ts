import { ButtonProps } from '@mui/material/Button'

type Palette = 'primary' | 'danger' | 'secondary' | 'success'
type Width = 'xs' | 'sm' | 'md' | 'lg'

export interface Props extends ButtonProps {
  width?: Width
  fullWidth?: boolean
  disableRipple?: boolean
  tooltipTitle?: string
  isLoading?: boolean
  palette?: Palette
}

export interface ConditionalButtonTooltipWrapperProps {
  condition: boolean
  wrapper: React.FC<React.ReactElement>
  children: React.ReactElement
}

export interface GenerateStylesProps {
  fullWidth: boolean
  width?: Width
  variant: 'text' | 'outlined' | 'contained' | undefined
  palette?: Palette
}
