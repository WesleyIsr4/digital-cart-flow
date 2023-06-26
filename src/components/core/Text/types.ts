import { ReactNode } from 'react'

import { colors } from 'styles/theme/configs/colors/types'

import Text from '.'

export type TextBased = {
  tag?: keyof JSX.IntrinsicElements
  role?: string
  ariaLabel?: string
  overline?: boolean
  fontSize: string
  fontWeight: number
  color: colors
}

export type Text = TextBased & {
  children: ReactNode
}
