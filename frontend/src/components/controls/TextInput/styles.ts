import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing, palette }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    transition: '200ms',
  },

  noMargin: {
    margin: 0,
  },

  noMarginWithLabel: {
    margin: 0,
    marginTop: spacing(1),
  },

  hidden: {
    display: 'none',
  },

  labelDisabled: {
    display: 'inline',
    opacity: 0.6,
  },

  fontInput: {
    fontFamily: 'Noto Sans, sans-serif ',
  },

  showError: {
    opacity: '1 !important',
  },
  errorLabel: {
    height: spacing(2.5),
    fontSize: spacing(1.5),
    paddingLeft: spacing(2),
    color: palette.error.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',

    opacity: 0,
    transition: '200ms',
  },
}))
