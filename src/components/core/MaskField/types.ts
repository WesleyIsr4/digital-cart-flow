import { InputHTMLAttributes } from 'react'

import maskTypes from 'utils/masks/maskTypes'

import { Textfield as TextfieldBaseType } from '../Textfield/types'

export type Textfield = {
  mask?: keyof typeof maskTypes
  validate?: (value: any) => string | boolean | undefined
  'data-testid': string
} & TextfieldBaseType &
  InputHTMLAttributes<HTMLInputElement>
