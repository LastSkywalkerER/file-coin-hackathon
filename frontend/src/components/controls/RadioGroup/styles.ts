import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing, palette }) => ({
  radioGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  asterisk: {
    color: 'red',
    display: 'inline',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: spacing(1),
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  error: { color: palette.error.main },
  radioGroupVertical: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}))
