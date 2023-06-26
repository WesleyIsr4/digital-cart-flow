import { DevTool } from '@hookform/devtools'
import { useFormContext } from 'react-hook-form'

import type * as T from './types'

function FormDevTools({ control }: T.FormDevTools) {
  const methods = useFormContext()

  if (process.env.NODE_ENV === 'production') return null
  return <DevTool control={control || methods.control} />
}

export default FormDevTools
