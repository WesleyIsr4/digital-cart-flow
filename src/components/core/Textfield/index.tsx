import { forwardRef } from 'react'

import FieldInfo from 'components/core/FieldInfo'
import Label from 'components/core/Label'

import * as S from './styles'
import type * as T from './types'

function Textfield(
  {
    scale,
    ariaLabel,
    onlyNumbers,
    label,
    name,
    error,
    placeholder,
    maxLength,
    onChange,
    leftElement,
    rightElement,
  }: T.Textfield,
  ref: any
) {
  return (
    <S.Fieldset>
      <Label name={name} scale={scale}>
        {label}
      </Label>
      {leftElement && <S.LeftElement>{leftElement}</S.LeftElement>}
      <S.Textfield
        ref={ref}
        aria-label={ariaLabel}
        maxLength={maxLength}
        name={name}
        scale={scale}
        placeholder={placeholder}
        onChange={(event) => {
          if (!onChange) {
            const { value } = event.target
            event.target.value = onlyNumbers
              ? value.replace(/[^\d]/g, '').replace(/[^0-9]+/g, '')
              : value
          }
          onChange?.(event)
        }}
      />
      <FieldInfo>{error}</FieldInfo>
      {rightElement && <S.RightElement>{rightElement}</S.RightElement>}
    </S.Fieldset>
  )
}

export default forwardRef(Textfield)
