import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  icon: {
    position: 'absolute',
    height: '40px',
    width: '40px',
    right: '2px',

    color: palette.customColors.grey200,

    '& > svg': {
      height: '20px',
      width: '20px',
    },
  },
}))
