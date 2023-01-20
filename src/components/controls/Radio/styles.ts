import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  radio: {
    color: palette.text.primary,
  },
  root: {
    color: palette.grey[100],
  },
}))
