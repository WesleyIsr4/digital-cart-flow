import { InputHTMLAttributes, ReactElement } from 'react'

import { Scale } from 'types/shared'

export type Textfield = {
  scale?: Scale
  label: string
  name: string
  placeholder?: string
  error?: string
  value?: string | number | undefined
  onlyNumbers?: boolean
  ariaLabel?: string
  required?: boolean
  rightElement?: ReactElement
  leftElement?: ReactElement
  maxLenght?: number
} & InputHTMLAttributes<HTMLInputElement>

export type InputStyle = {
  scale?: Scale
}
