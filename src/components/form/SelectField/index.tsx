import { useFormContext, useWatch } from 'react-hook-form'

import { requiredField } from 'utils/schema/message'

import useFormError from 'hooks/useFormHook'

import Select from 'components/core/SelectField'

import type * as T from '../../core/SelectField/types'

function SelectField({ name, label, onSelectChange, options, required }: T.Select) {
  const { register, control } = useFormContext()
  const fieldValue = useWatch({ control, name })

  const error = useFormError(name)

  const registerMethods = register(name, {
    required: required && requiredField,
  })

  return (
    <Select
      {...registerMethods}
      required={required}
      name={name}
      label={label}
      onSelectChange={onSelectChange}
      options={options}
      value={fieldValue}
      error={error}
    />
  )
}

export default SelectField
