import { useMemo } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import getCreditCardType from 'credit-card-type'

import { requiredField } from 'utils/schema/message'

import useFormError from 'hooks/useFormHook'

import MaskField from 'components/core/MaskField'

import MasterCard from 'svgs/mastercard.svg'
import DinnersClub from 'svgs/dinnersclub.svg'
import AmericanExpress from 'svgs/americanexpress.svg'
import Visa from 'svgs/visa.svg'
import Elo from 'svgs/elo.svg'
import PayIuguSVG from 'svgs/payIugu.svg'

import type * as T from '../../core/MaskField/types'

const getCreditCardFlag = (flag: string) =>
  ({
    visa: <Visa />,
    mastercard: <MasterCard />,
    'diners-club': <DinnersClub />,
    payIugu: <PayIuguSVG />,
    elo: <Elo />,
    'american-express': <AmericanExpress />,
  }[flag] || undefined)

function CreditCardField({
  name,
  required,
  label,
  onBlur,
  onChange,
  validate,
  ...rest
}: T.Textfield) {
  const { register, control } = useFormContext()
  const fieldValue = useWatch({ name, control })

  const error = useFormError(name)

  const methods = register(name, {
    validate: (value) => validate?.(value),
    required: required && requiredField,
  })

  const creditCardType = useMemo(() => {
    const [found] = getCreditCardType(fieldValue) as any[]
    if (!found || !fieldValue) return undefined
    return getCreditCardFlag(found.type)
  }, [fieldValue])

  return (
    <MaskField
      {...rest}
      {...methods}
      onChange={(event) => {
        onChange?.(event)
        methods.onChange(event)
      }}
      onBlur={(event) => {
        onBlur?.(event)
        methods.onBlur(event)
      }}
      name={name}
      label={label}
      value={fieldValue}
      error={error}
      mask="cardNumber"
      rightElement={creditCardType}
    />
  )
}

export default CreditCardField
