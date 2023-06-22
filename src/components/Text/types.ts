import { colors } from 'styles/theme/configs/colors/types'

export type TextBased = {
  tag?: keyof JSX.IntrinsicElements // tag HTML como 'p', 'h1', 'span', etc.
  role?: string
  ariaLabel?: string
  // underline?: boolean
  overline?: boolean
  fontSize: string
  // lineHeight: string
  fontWeight: number
  color: colors
}

export type Text = TextBased & {
  children: string
}
