import { useFormContext, useWatch } from 'react-hook-form'

import { requiredField } from 'utils/schema/message'

import useFormError from 'hooks/useFormHook'

import MaskField from '../../core/MaskField'
import type * as T from '../../core/MaskField/types'

function Mask({ name, required, label, onBlur, onChange, validate, ...rest }: T.Textfield) {
  const { register, control } = useFormContext()
  const fieldValue = useWatch({ control, name })

  const error = useFormError(name)

  const methods = register(name, {
    validate: (value) => validate?.(value),
    required: required && requiredField,
  })

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
    />
  )
}

export default Mask
