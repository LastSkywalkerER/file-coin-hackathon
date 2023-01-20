import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing, palette }) => ({
  select: {
    width: '100%',
  },
  label: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    right: '14px',
    width: `18px !important`,
    height: `18px !important`,
  },
  placeholderOption: {
    color: palette.customColors.grey350,
  },
  normalOption: {
    color: 'black',
  },
  optionIcon: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    minWidth: '10px',
    width: '44%',

    '& div': {
      minWidth: '10px',
    },
  },
  optionName: {
    display: 'flex',
    alignItems: 'center',
    color: palette.customColors.text,
  },
  headerItem: {
    opacity: '1 !important',
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.7,
    pointerEvents: 'none',
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

  icon: {
    width: spacing(2.5),
    height: spacing(2.5),
  },
  selectOption: {
    maxWidth: '500px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))
