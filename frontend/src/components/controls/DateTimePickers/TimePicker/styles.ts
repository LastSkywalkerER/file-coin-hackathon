import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  icon: {
    '& svg': {
      color: `${palette.customColors.grey350} !important`,
    },
  },
}))
