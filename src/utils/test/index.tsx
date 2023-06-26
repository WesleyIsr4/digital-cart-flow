import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'

import * as theme from 'styles/theme'

const customRender = (ui: ReactElement, renderOptions: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

const renderWithFormProvider = (ui: ReactElement, renderOptions: RenderOptions = {}) => {
  const Provider = ({ children }: any) => {
    const methods = useForm<{ test: string }>()
    return <FormProvider {...methods}>{children}</FormProvider>
  }

  return customRender(<Provider>{ui}</Provider>, renderOptions)
}

export * from '@testing-library/react'
export { customRender as render, renderWithFormProvider }
