import { useFormContext, useWatch } from 'react-hook-form'

import { requiredField } from 'utils/schema/message'

import useFormError from 'hooks/useFormHook'

import Textfield from '../../core/Textfield'
import type * as T from '../../core/Textfield/types'

function Field({ name, required, label, onChange, onBlur, ...rest }: T.Textfield) {
  const { register, control } = useFormContext()

  const fieldValue = useWatch({ control, name })

  const methods = register(name, {
    required: required && requiredField,
    validate: (value: string) => (value ? Boolean(value.trim()) || 'Campo inválido' : true),
  })

  const error = useFormError(name)

  return (
    <Textfield
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
      label={label}
      value={fieldValue}
      error={error}
    />
  )
}

export default Field
