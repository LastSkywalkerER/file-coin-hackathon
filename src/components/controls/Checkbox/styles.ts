import { makeStyles } from 'tss-react/mui'
interface Props {
  width?: string
}

export const useClasses = makeStyles<Props>()(({ palette, spacing }, { width }) => ({
  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width,
  },
  errorText: {
    color: palette.error.main,
  },

  disabled: {
    cursor: 'default',
    opacity: '0.5',
  },

  solo: {
    width: 'min-content',
    padding: 0,
  },

  checkbox: {
    padding: 0,
    marginRight: spacing(1),
  },
}))
