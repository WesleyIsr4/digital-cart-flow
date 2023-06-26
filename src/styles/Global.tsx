import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 ${({ theme }) => css`
   html,
   body {
     background: ${theme.colors.primaryWhite};

     font-family: 'DM Sans', sans-serif;
   }

   img {
     max-width: 100%;
   }

   * {
     scroll-behavior: smooth;
   }

   *,
   *::after,
   *::before {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-rendering: optimizeLegibility;
   }

   a {
     text-decoration: none;
     color: inherit;
   }

   button,
   a {
     cursor: pointer;
   }

   ::-webkit-scrollbar {
     width: 8px;
   }
 `}
`

export default GlobalStyles
