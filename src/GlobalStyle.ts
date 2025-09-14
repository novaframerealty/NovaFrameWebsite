import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.body};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.heading};
  }
`

export default GlobalStyle
