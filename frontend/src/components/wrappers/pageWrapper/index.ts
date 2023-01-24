import { withStyles } from 'tss-react/mui'

export const PageWrapper = withStyles('div', () => ({
  root: {
    paddingBottom: 50,
    padding: '0 2.5% 25px 2.5%',

    position: 'absolute',
    top: 165,
    left: 0,
    bottom: 0,
    right: 0,
    overflowY: 'scroll',
  },
}))
