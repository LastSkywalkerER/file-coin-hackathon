import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()({
  wrapper: {
    userSelect: 'none',
    pointerEvents: 'none',
    cursor: 'wait',
    textAlign: 'center',
  },

  title: {
    marginBottom: '16px',
  },
})
