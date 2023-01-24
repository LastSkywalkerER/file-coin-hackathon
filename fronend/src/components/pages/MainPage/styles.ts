import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing }) => ({
  paper: {
    padding: 20,
    width: '100%',
    height: '100%',
  },
  editor: {
    width: '100%',
    height: 'calc(100% - 40px)',
  },
}))
