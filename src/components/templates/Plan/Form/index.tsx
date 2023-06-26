import { useState } from 'react'
import { useRouter } from 'next/router'

import Text from 'components/core/Text'
import CreditCardField from 'components/form/CreditCardField'
import Mask from 'components/form/MaskField'
import TextField from 'components/form/TextField'
import Button from 'components/core/Button'
import SelectField from 'components/form/SelectField'

import AmericanExpress from 'svgs/americanexpress.svg'
import DinnersClub from 'svgs/dinnersclub.svg'
import Elo from 'svgs/elo.svg'
import MasterCard from 'svgs/mastercard.svg'
import PayIuguSVG from 'svgs/payIugu.svg'
import Visa from 'svgs/visa.svg'

import * as S from './styles'

const optionsCard = [MasterCard, DinnersClub, AmericanExpress, Visa, Elo]

function Form() {
  const { push } = useRouter()
  const [, setSelectedOption] = useState('')

  function createInstallmentsArray(numberInstallments: number) {
    return Array.from({ length: numberInstallments }, (_, i) => ({
      label: `${i + 1} ${i + 1 > 1 ? 'parcelas' : 'parcela'}`,
      value: i + 1,
    }))
  }

  const handleSelectChange = (selected: string) => {
    setSelectedOption(selected)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Description>
          <Text color="scaleBlack" fontSize="1.25rem" fontWeight={400}>
            Estamos quase lá!
          </Text>
          <Text color="scaleBlack" fontSize="1rem" fontWeight={400}>
            Insira seus dados de pagamento abaixo:
          </Text>
        </S.Description>

        <S.CreditCardWrapper>
          <div>
            {optionsCard.map((Card, index) => (
              <Card key={index} />
            ))}
          </div>
          <PayIuguSVG />
        </S.CreditCardWrapper>
      </S.Header>
      <S.FormMain>
        <CreditCardField
          name="credit"
          label="Número do cartão"
          placeholder="0000 0000 0000 0000"
          data-testid="credit"
          mask="cardNumber"
          required
        />
        <S.GroupCardInput>
          <Mask
            label="Validade"
            required
            name="creditCard.expiryDate"
            mask="monthAndYear"
            data-testid="input:creditCard.expiryDate"
            placeholder="MM/AA"
          />
          <Mask
            label="CVV"
            required
            name="creditCard.cvv"
            mask="cvv"
            data-testid="input:creditCard.cvv"
            placeholder="000"
          />
        </S.GroupCardInput>
        <TextField name="name" label="Nome impresso no cartão" required placeholder="Seu nome" />
        <Mask
          label="CPF"
          data-testid="identity"
          name="identity"
          mask="cpf"
          placeholder="000.000.000-00"
        />
        <TextField name="coupon" label="Cupom" placeholder="Insira aqui" />
        <SelectField
          name="installments"
          options={createInstallmentsArray(12)}
          label="Número de parcelas"
          onSelectChange={handleSelectChange}
          required
        />
        <Button onClick={() => push('/checkout')}>Finalizar pagamento</Button>
      </S.FormMain>
    </S.Wrapper>
  )
}

export default Form
