import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    maxHeight: '165px',
  },
  navBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 75px',
  },
  navBlockRight: {
    padding: '30px',
  },
  navItem: {
    margin: '0 15px',
    color: palette.customColors.text,
    textDecoration: 'none',
    textShadow: '0 2px #000000',
  },
  img: {
    width: '42px',
    height: '42px',
    margin: '0 15px',
  },
  buttonHeader: {
    margin: '0 15px',
  },
}))
