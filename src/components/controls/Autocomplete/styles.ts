import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(() => ({
  loader: {
    width: `18px !important`,
    height: `18px !important`,
    marginRight: '6px',
    marginTop: '3px',
  },
  endAdornment: {
    top: 'auto',
  },
}))
