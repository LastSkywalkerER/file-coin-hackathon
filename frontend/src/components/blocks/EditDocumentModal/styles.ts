import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing, breakpoints }) => ({
  wrapper: {
    width: '100%',
    height: '50vh',
  },
}))
