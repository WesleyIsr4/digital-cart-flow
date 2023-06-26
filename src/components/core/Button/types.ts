import { ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons'

export type Button = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'tertiary'
  icon?: IconType
  leftElement?: ReactElement
  rightElement?: ReactElement
  noBackground?: boolean
  children: ReactNode
  onClick?: () => void
}
