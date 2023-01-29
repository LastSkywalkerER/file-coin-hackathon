import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(() => ({
  paper: {
    padding: 20,
    width: '100%',
    height: '100%',
  },
  form: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editor: {
    width: '100%',
    height: 'calc(100% - 150px)',
  },
}))
