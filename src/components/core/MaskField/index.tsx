import { isValid } from 'date-fns'
import formatString from 'format-string-by-pattern'
import { ChangeEvent, forwardRef, useCallback } from 'react'

import maskTypes from 'utils/masks/maskTypes'

import Textfield from '../Textfield'
import type * as T from './types'

function Maskfield(
  {
    label,
    error,
    mask,
    onChange,
    maxLength = undefined,
    disabled,
    color,
    ariaLabel,
    ...rest
  }: T.Textfield,
  ref: any
) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      e.target.value = mask ? formatString(maskTypes[mask](value), value) : value

      if ((mask === 'date' || mask === 'monthAndYear') && !isValid(new Date(e.target.value))) {
        const [day, month, year] = e.target.value.split('/')
        if (Number(month) > 12 && year) return (e.target.value = `${day}/${12}/${year}`)
      }
      onChange?.(e)
    },
    [mask, onChange]
  )

  return (
    <Textfield
      {...rest}
      ariaLabel={ariaLabel}
      disabled={disabled}
      ref={ref}
      label={label}
      error={error}
      maxLength={maxLength}
      onChange={handleChange}
      onlyNumbers
      color={color}
    />
  )
}

export default forwardRef(Maskfield)
