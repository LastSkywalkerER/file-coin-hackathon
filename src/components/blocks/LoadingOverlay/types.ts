import { ReactElement, ReactNode } from 'react'

export interface Props {
  loaded?: boolean
  active: boolean
  spinner?: ReactElement
  children: ReactNode
}
