import { LabelHTMLAttributes, ReactNode } from 'react'

import { Scale } from 'types/shared'

import { colors } from 'styles/theme/configs/colors/types'

export type Label = {
  children: ReactNode
  color?: colors
  fontWeight?: 'lighter' | 'normal' | 'bold'
  scale?: Scale
  align?: 'justify' | 'center' | 'left' | 'right'
  name: string
} & LabelHTMLAttributes<HTMLLabelElement>
