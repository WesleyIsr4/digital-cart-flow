import { isValid } from 'date-fns'
import formatString from 'format-string-by-pattern'
import { forwardRef, useCallback } from 'react'

import maskTypes from 'utils/masks/maskTypes'

import Textfield from '../Textfield'
import type * as T from './types'

function Maskfield(
  { label, error, mask, onChange, maxLength, disabled, color, ariaLabel, ...rest }: T.Textfield,
  ref: any
) {
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target
      e.target.value = mask ? formatString(maskTypes[mask](value, maxLength), value) : value

      if ((mask === 'date' || mask === 'monthAndYear') && !isValid(new Date(e.target.value))) {
        const [day, month, year] = e.target.value.split('/')
        if (Number(month) > 12 && year) return (e.target.value = `${day}/${12}/${year}`)
      }
      onChange?.(e)
    },
    [mask, onChange, maxLength]
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
