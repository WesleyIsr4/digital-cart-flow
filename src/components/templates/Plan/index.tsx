import { FormProvider, useForm } from 'react-hook-form'

import GenericIcon from 'components/core/Icon'

import LogoSVG from 'svgs/logo.svg'

import Form from './Form'
import SelectPlan from './SelectPlan'
import * as S from './styles'

function PlanTemplate({ data }: any) {
  const methods = useForm({ mode: 'all' })

  return (
    <FormProvider {...methods}>
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
          <Form />
          <SelectPlan data={data} />
        </S.Container>
      </S.WrapperPlan>
    </FormProvider>
  )
}

export default PlanTemplate
