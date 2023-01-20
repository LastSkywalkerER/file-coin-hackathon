import './materialTheme.d'

import { common } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import colors from './colors'
import { constants } from './constants'
import { units } from './units'

export const materialTheme = createTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: common.white,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      contrastText: common.white,
    },
    text: {
      primary: colors.text,
      secondary: colors.text,
      disabled: colors.textDisabled,
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
    },
    error: {
      main: colors.danger,
      light: colors.dangerLight,
    },
    background: {
      default: colors.background,
    },
    customColors: colors,
    units: units,
    constants,
  },
  typography: {
    body1: {
      fontSize: '30px',
      letterSpacing: '-1px',
      fontFamily: 'VT323 !important',
      textShadow: `0 2px 2px ${colors.boxShadow}`,
    },
    body2: {
      fontSize: '30px',
      letterSpacing: '-1px',
      fontFamily: 'VT323 !important',
      textShadow: `0 3px ${colors.boxShadow}`,
    },
    h3: {
      textShadow: `0 3px ${colors.boxShadow}`,
    },
    h5: {
      textShadow: `0 5px ${colors.boxShadow}`,
    },
    h6: {
      textShadow: `0 5px ${colors.boxShadow}`,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.text,
          textDecoration: 'none',
          textShadow: `0 2px ${colors.boxShadow}`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          color: 'white',
          minWidth: 'max-content',
          width: 'max-content',
          textShadow: `0 2px ${colors.boxShadow}`,
          padding: '15px 30px !important',
        },
        containedPrimary: {
          borderRadius: '5px',
          boxShadow: `0 2px 2px 1px ${colors.boxShadow}`,
          padding: '15px',

          '&:hover': {
            backgroundColor: colors.primary50,
            borderRadius: '5px',
            boxShadow: `0 2px 2px 1px ${colors.boxShadow}`,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiClockPicker: {
      styleOverrides: {
        arrowSwitcher: {
          zIndex: 1,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minHeight: '30px',
          minWidth: '30px',
        },
      },
    },
    MuiInput: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          height: '40px',
          padding: '0 19px',
        },
        input: {
          textAlign: 'center',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.text,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.2);',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${colors.boxShadow}`,
          boxShadow: `0 2px 2px ${colors.boxShadow}`,
        },
      },
    },
    MuiRadio: {
      defaultProps: { color: 'primary' },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.textLight,
        },
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          color: '#c4c4c4',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: `${colors.dangerLight} !important`,
        },
        icon: {
          color: `${colors.danger} !important`,
        },
        message: {
          color: `${colors.dangerDark} !important`,
        },
      },
    },
  },
  spacing: units.single,
})
