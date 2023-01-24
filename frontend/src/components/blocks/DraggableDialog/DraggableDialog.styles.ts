import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ spacing, palette }) => ({
  draggableHandle: {
    cursor: 'move',
    position: 'absolute',
    width: '100%',
    height: '20px',
    zIndex: 1,
    transition: '200ms',

    '&:hover': {
      background: palette.customColors.white10,
    },
  },

  modalTitle: {
    display: 'flex',
    fontSize: '20px',
    alignItems: 'center',
    lineHeight: '23px',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    width: '100%',
  },
  paper: {
    height: 'auto',
    padding: spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '30px',
  },

  closeButton: {
    position: 'absolute',
    top: spacing(1),
    right: spacing(1),
    zIndex: 100,
  },
}))
