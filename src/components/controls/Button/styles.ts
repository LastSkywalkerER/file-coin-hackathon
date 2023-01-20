import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { makeStyles, withStyles } from 'tss-react/mui'

export const useClasses = makeStyles()(({ palette, spacing }) => ({
  button: {
    '&:disabled path': {
      fill: 'rgb(0 0 0 / 30%) !important',
    },
  },
  primaryOutlined: {
    color: '#25ADBF',
    borderColor: '#25ADBF',

    '& path': {
      fill: '#25ADBF !important',
    },
    '&:hover': {
      borderColor: '#25ADBF',
      backgroundColor: '#eaf7f9',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  primaryContained: {
    borderColor: '#25ADBF',
    backgroundColor: '#25ADBF',

    '& path': {
      fill: '#ffffff !important',
    },
    '&:hover': {
      borderColor: '#10a2b5',
      backgroundColor: '#0a94a6',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: '#25ADBF',
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  dangerOutlined: {
    color: '#E45B4A',
    borderColor: '#E45B4A',

    '& path': {
      fill: '#E45B4A !important',
    },
    '&:hover': {
      borderColor: '#E45B4A',
      backgroundColor: '#FDEFED',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  dangerContained: {
    color: '#E45B4A',
    borderColor: '#FDEFED',
    backgroundColor: '#FDEFED',

    '& path': {
      fill: '#E45B4A !important',
    },
    '&:hover': {
      backgroundColor: '#ffded9',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  secondaryOutlined: {
    color: '#929A9B',
    borderColor: '#929A9B',

    '& path': {
      fill: '#929A9B !important',
    },
    '&:hover': {
      borderColor: '#929A9B',
      backgroundColor: '#f5f5f5',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  secondaryContained: {
    borderColor: '#929A9B',
    backgroundColor: '#929A9B',

    '& path': {
      fill: '#ffffff !important',
    },
    '&:hover': {
      backgroundColor: '#80898a',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },

  successOutlined: {
    color: '#00C562',
    borderColor: '#00C562',

    '& path': {
      fill: '#00C562 !important',
    },
    '&:hover': {
      borderColor: '#00C562',
      backgroundColor: '#E6FAF0',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  successContained: {
    borderColor: '#00C562',
    backgroundColor: '#00C562',

    '& path': {
      fill: '#ffffff !important',
    },
    '&:hover': {
      backgroundColor: '#E6FAF0',
      filter: 'none',
    },
    '&:disabled': {
      color: '#CAD5D7',
      backgroundColor: palette.customColors.backgroundHeaderMenu,
      borderColor: '#CAD5D7',

      '& path': {
        fill: '#CAD5D7 !important',
      },
    },
  },
  warningOutlined: {
    color: '#f1717c',
    borderColor: '#f1717c',

    '&:hover': {
      borderColor: '#f1717c',
      filter: 'drop-shadow(0px 4px 4px #f1717c)',
    },
  },
  warningContained: {
    borderColor: '#f1717c',
    backgroundColor: '#f1717c',
  },

  noWidth: {
    minWidth: 0,
  },
  widthSmall: {
    minWidth: spacing(15),
  },
  widthMedium: {
    minWidth: spacing(20),
  },
  widthLarge: {
    minWidth: spacing(25),
  },
  fullWidth: {
    width: '100%',
  },

  loader: {
    width: '22px !important',
    height: '22px !important',
  },
}))

export const LightTooltip = withStyles(Tooltip, ({ palette, spacing }) => ({
  tooltip: {
    backgroundColor: palette.common.white,
    padding: spacing(1),
    color: palette.text.primary,
    boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.06)',
    fontSize: palette.constants.fontSizes.small,
  },
  arrow: {
    color: palette.common.white,
  },
}))

export const ActionsWrapper = withStyles(Box, () => ({
  root: {
    display: 'grid',

    alignItems: 'center',
    justifyContent: 'flex-end',

    gridAutoFlow: 'column',
    gridAutoColumns: 'max-content',
    gridColumnGap: '8px',
  },
}))
