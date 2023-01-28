import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing }) => ({
  loader: {
    width: spacing(8),
    height: spacing(8),
  },
  inlineLoader: {
    display: 'inline-block',
    width: '100%',
    minWidth: spacing(2),
    minHeight: spacing(2),
    height: '100%',
  },
  circle: {
    strokeWidth: '4px',
  },
  pageLoader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 20,

    '&::before': {
      content: '""',
      position: 'absolute',
      opacity: 0.5,
      height: '100%',
      width: '100%',
    },
  },
}))
