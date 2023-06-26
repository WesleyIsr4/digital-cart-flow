import { useState } from 'react'

import Text from 'components/core/Text'

import * as S from './styles'

function PlanFields({ item }: any) {
  const [selectedOption, setSelectedOption] = useState<string>('option1')

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value)
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <S.Wrapper>
      <S.PlanCardPaywall key={item.id}>
        <S.Text>
          <S.Plan>
            <Text fontWeight={700} fontSize="0.875rem" color="primaryBlue">
              {item.title} | {item.description}
            </Text>
            <Text fontWeight={400} fontSize="0.75rem" color="primaryBlue">
              De R$ {formatCurrency(item.fullPrice)} | Por R$
              {formatCurrency(item.fullPrice - item.discountAmmount)}
            </Text>
            <Text fontWeight={400} fontSize="0.625rem" color="secondaryOrange">
              {item.installments}x de{' '}
              {formatCurrency((item.fullPrice - item.discountAmmount) / item.installments)}/mês
            </Text>
          </S.Plan>
          <S.Badge>
            <Text fontWeight={400} fontSize="0.625rem" color="primaryWhite">
              -{item.discountPercentage * 100}%
            </Text>
          </S.Badge>
        </S.Text>
      </S.PlanCardPaywall>
      <div>
        <S.RadioInput
          type="radio"
          name="option.plan"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
      </div>
    </S.Wrapper>
  )
}

export default PlanFields
