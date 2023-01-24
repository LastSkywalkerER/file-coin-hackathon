import { Box } from '@mui/material'
import { FC, memo } from 'react'

import { Loader } from '../Loader'
import { useClasses } from './styles'
import { Props } from './types'

export const LoadingOverlay: FC<Props> = memo((props: Props) => {
  const { loaded, active, spinner, children } = props

  const { classes } = useClasses()

  const spinnerElement = spinner || <Loader className={classes.loader} />

  if (!loaded && active) {
    return spinnerElement
  }

  return (
    <>
      {active && <Box className={classes.loadingWrapper}>{spinnerElement}</Box>}

      {children}
    </>
  )
})
