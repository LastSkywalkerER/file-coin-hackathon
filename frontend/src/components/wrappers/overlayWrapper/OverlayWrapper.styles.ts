import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(() => ({
  overlay: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'fixed',
  },

  backgroundImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },

  movingBackground: {
    opacity: 0.85,
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}))
