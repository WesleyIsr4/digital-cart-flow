import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

function useFormError(fieldName: string) {
  const { formState } = useFormContext()

  const getError = useCallback((field: string, errors: any) => {
    if (!field.includes('.')) return errors[field]?.message || errors[field]?.type
    const { message, type } = field.split?.('.').reduce((acc, curr) => acc?.[curr], errors) || {}
    return message || type
  }, [])

  return getError(fieldName, formState.errors)
}

export default useFormError
