import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  icon: {
    cursor: 'pointer',
    color: palette.customColors.grey200,
  },
}))
