// Importando o React e styled-components
import { ChangeEvent, forwardRef } from 'react'

import Label from 'components/core/Label'

import * as S from './styles'
import type * as T from './types'

function Select({ options, onSelectChange, name, label, value }: T.Select, ref: any) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value)
  }

  return (
    <S.Fieldset>
      <Label htmlFor={name} name={name}>
        {label}
      </Label>
      <S.SelectWrapper ref={ref} id={name} value={value} name={name} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectWrapper>
    </S.Fieldset>
  )
}

export default forwardRef(Select)
