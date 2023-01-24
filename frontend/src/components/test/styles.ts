import { makeStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette }) => ({
  overlay: {
    opacity: 0.85,
    width: '100%',
    height: '100%',
    zIndex: 10,
    top: 0,
    left: 0,
    position: 'fixed',
  },

  movingBackground: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("./assets/background/parallax-bg.gif")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: '40% 40%',
  },

  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
  },

  navBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
    padding: '0 75px',
  },

  navBlockRight: {
    padding: '30px',
  },

  navItem: {
    margin: '0 15px',
  },

  img: {
    width: '42px',
    height: '42px',
    margin: '0 15px',
  },

  buttonHeader: {
    margin: '0 15px',
  },

  mintWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    paddingBottom: '150px',
  },

  mintBox: {
    width: '520px',
  },

  title: {
    fontSize: '48px',
    textShadow: '0 5px #000000',
  },
  text: {
    fontSize: '30px',
    letterSpacing: '-5.5%',
    fontFamily: 'VT323',
    textShadow: '0 2px 2px #000000',
  },

  textWarn: {
    textShadow: '0 3px #000000',
    color: palette.primary.main,
  },

  buttonIncrement: {
    marginTop: '10px',
  },

  input: {
    width: '100px',
    marginTop: '19px',
  },

  textCenter: { textAlign: 'center' },
}))
