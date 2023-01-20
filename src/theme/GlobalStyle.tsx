/* eslint-disable */
import { GlobalStyles } from '@mui/material'

export const CommonStyles = () => (
  <GlobalStyles
    styles={({ palette }) => ({
      '*': {
        position: 'relative',
        boxSizing: 'border-box',
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: palette.units.single,
        backgroundColor: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        border: 'none !important',
        borderRadius: palette.units.single,
        backgroundColor: palette.customColors.grey200,
      },
      '*::-webkit-scrollbar-corner': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      '*::-webkit-scrollbar': {
        width: palette.units.single,
        height: palette.units.single,
        backgroundColor: 'transparent',
      },
      'html *::-webkit-scrollbar': {
        height: '16px',
      },
      'html, #root': {
        height: '100%',
        textAlign: 'center',
        fontFamily: '"Press start 2P", "VT323"',
        color: 'white',
      },
      body: {
        overflow: 'hidden',
      },
    })}
  />
)

export const GlobalStyle = () => (
  <>
    <CommonStyles />
  </>
)
