import React from 'react'

export interface SkeletonWrapperProps {
  children?: JSX.Element | React.ReactElement | React.ReactElement[] | string | number
  isLoaded: boolean
  height?: number
}
