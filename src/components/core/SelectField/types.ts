import { SelectHTMLAttributes } from 'react'

export type Option = {
  value: string | number
  label: string
}

export type Select = {
  options: Array<Option>
  onSelectChange: (selected: string) => void
  name: string
  label: string
  required: boolean
  error?: string
} & SelectHTMLAttributes<HTMLInputElement>
