import { Skeleton } from '@mui/material'

import { SkeletonWrapperProps } from './types'

export const SkeletonWrapper = (props: SkeletonWrapperProps) => {
  const { children, isLoaded, height = 17 } = props

  return isLoaded && (children || children === 0) ? (
    <>{children}</>
  ) : (
    <Skeleton variant="rectangular" width={60} height={height} />
  )
}
