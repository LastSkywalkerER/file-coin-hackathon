import { CircularProgress } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

import { useClasses } from './styles'
import { Props } from './types'

export const Loader: React.FC<Props> = (props: Props): React.ReactElement => {
  const { className, inline = false } = props

  const { classes } = useClasses()

  return (
    <>
      <CircularProgress
        classes={{ circle: classes.circle }}
        className={clsx(!inline ? classes.loader : classes.inlineLoader, className)}
      />
    </>
  )
}

export const PageLoader: React.FC = () => {
  const { classes } = useClasses()

  return (
    <div className={classes.pageLoader}>
      <Loader />
    </div>
  )
}
