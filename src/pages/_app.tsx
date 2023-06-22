import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/Global'
import * as theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
