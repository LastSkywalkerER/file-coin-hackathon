import { Palette } from '@mui/material/styles'

import { units } from '@/theme'

import colors from './colors'
import { constants } from './constants'

declare module '@mui/material/styles' {
  export interface CustomPalette extends Palette {
    customColors: typeof colors
    units: typeof units
    constants: typeof constants
  }

  export interface PaletteOptions {
    customColors: typeof colors
    units: typeof units
    constants: typeof constants
  }

  export interface Theme {
    palette: CustomPalette
  }
}
