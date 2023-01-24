import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  icon: {
    color: palette.customColors.grey200,
  },
}))
