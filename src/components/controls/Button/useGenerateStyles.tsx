import { useClasses } from './styles'
import { GenerateStylesProps } from './types'

export const useGenerateStyles = (props: GenerateStylesProps) => {
  const { fullWidth, width, variant, palette } = props

  const { classes } = useClasses()

  return {
    [classes.fullWidth]: fullWidth,
    [classes.noWidth]: width === 'xs',
    [classes.widthSmall]: width === 'sm',
    [classes.widthMedium]: width === 'md',
    [classes.widthLarge]: width === 'lg',
    [classes.primaryOutlined]: variant === 'outlined' && palette === 'primary',
    [classes.primaryContained]: variant === 'contained' && palette === 'primary',
    [classes.dangerOutlined]: variant === 'outlined' && palette === 'danger',
    [classes.dangerContained]: variant === 'contained' && palette === 'danger',
    [classes.secondaryOutlined]: variant === 'outlined' && palette === 'secondary',
    [classes.secondaryContained]: variant === 'contained' && palette === 'secondary',
    [classes.successOutlined]: variant === 'outlined' && palette === 'success',
    [classes.successContained]: variant === 'contained' && palette === 'success',
  }
}
