import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette, spacing }) => ({
  closeButton: {
    cursor: 'pointer',
  },
  closeButtonAbsolute: {
    position: 'absolute',
    top: spacing(1),
    right: spacing(1),
    zIndex: 100,
  },
  icon: {
    color: palette.grey[200],
  },
}))
