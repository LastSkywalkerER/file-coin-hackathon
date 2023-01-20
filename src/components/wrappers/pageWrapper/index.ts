import { withStyles } from 'tss-react/mui'

export const PageWrapper = withStyles('div', () => ({
  root: {
    paddingBottom: '100px',
    width: '90%',

    position: 'absolute',
    top: 165,
    left: '50%',
    bottom: 0,
    transform: 'translateX(-50%)',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
  },
}))
