import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *,::before,::after {
    border-width: 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.base.text};
  }

  :focus {
    outline: 0;
    box-shadow:  0 0 0 2px ${({ theme }) => theme.colors.brand.purple};
  }
  
  body {
    background: ${({ theme }) => theme.colors.base.background};
    color:${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: ${({ theme }) => theme.font.fontFamily.roboto};
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2 {    
    line-height:${({ theme }) => theme.font.lineHeight.base};
  }

  button {
    cursor: pointer;
  }
`
