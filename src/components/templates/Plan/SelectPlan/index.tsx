import Text from 'components/core/Text'

import * as S from './styles'
import PlanFields from './PlanFields'

function SelectPlan({ data }: any) {
  return (
    <S.Wrapper>
      <S.HeaderTitle>
        <Text color="scaleBlack" fontSize="1.25rem" fontWeight={400}>
          Confira o seu plano:
        </Text>
        <Text color="scaleBlack" fontSize="1rem" fontWeight={400}>
          Insira seus dados de pagamento abaixo:
        </Text>
      </S.HeaderTitle>
      <S.PlanWrapper>
        {data.map((item: any) => (
          <PlanFields key={item.id} item={item} />
        ))}
        {/* <PlanFields />
        <PlanFields /> */}
      </S.PlanWrapper>
    </S.Wrapper>
  )
}

export default SelectPlan
