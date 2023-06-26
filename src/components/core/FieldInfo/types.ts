import { ReactNode } from 'react'

export type FieldInfo = {
  children?: ReactNode
  type?: 'error' | 'info' | 'warning'
  marginTopInfo?: string
}
