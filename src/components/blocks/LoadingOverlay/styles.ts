import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  loader: {
    left: 'calc(50% - 20px)',
    top: 'calc(50% - 20px)',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  loadingWrapper: {
    position: 'absolute',
    zIndex: 1000,
    height: '100%',
    width: '100%',
    background: palette.customColors.white60,
  },
}))
