import GenericIcon from 'components/core/Icon'
import Text from 'components/core/Text'
import Button from 'components/core/Button'

import LogoSVG from 'svgs/logo.svg'

import * as S from './styles'

function CheckoutTemplate() {
  return (
    <S.WrapperPlan>
      <S.Header>
        <div>
          <GenericIcon iconName="MdKeyboardArrowLeft" size={24} />
        </div>
        <div>
          <LogoSVG />
        </div>
      </S.Header>
      <S.Container>
        <S.GroupFeedback>
          <S.IconSuccess>
            <GenericIcon iconName="MdDone" size={32} />
          </S.IconSuccess>
          <div>
            <Text fontWeight={500} color="primaryBlue" fontSize="1.25rem">
              Parabéns!
            </Text>
            <Text fontWeight={400} color="scaleGray3" fontSize="1.25rem">
              Sua assinatura foi realizada <br /> com sucesso.
            </Text>
          </div>
        </S.GroupFeedback>
        <S.InfoCheckoutFeedback>
          <S.ValueCheckout>
            <S.StarWrapperSVG>
              <GenericIcon iconName="MdStarOutline" size={24} />
            </S.StarWrapperSVG>
            <div>
              <Text fontSize="1rem" fontWeight={500} color="primaryBlue">
                Anual | Parcelado
              </Text>
              <Text fontSize="0.875rem" fontWeight={400} color="primaryBlue">
                R$ 479,90 | 10x R$ 47,99
              </Text>
            </div>
          </S.ValueCheckout>
          <div>
            <S.InfoUser>
              <Text fontSize="0.875rem" fontWeight={400} color="scaleGray3">
                E-mail
              </Text>
              <Text fontSize="0.875rem" fontWeight={500} color="scaleBlack">
                fulano@cicrano.com.br
              </Text>
            </S.InfoUser>
            <S.InfoUser>
              <Text fontSize="0.875rem" fontWeight={400} color="scaleGray3">
                CPF
              </Text>
              <Text fontSize="0.875rem" fontWeight={500} color="scaleBlack">
                000.000.000-00
              </Text>
            </S.InfoUser>
          </div>
        </S.InfoCheckoutFeedback>
        <S.groupButton>
          <Text fontSize="0.75rem" fontWeight={700} color="scaleBlack">
            Gerenciar assinatura
          </Text>
          <Button size="large">IR PARA HOME</Button>
        </S.groupButton>
      </S.Container>
    </S.WrapperPlan>
  )
}

export default CheckoutTemplate
