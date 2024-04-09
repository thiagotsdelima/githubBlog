import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['gray-100']}
  }
  :root {
  font-size: 16px;
  scroll-behavior: smooth;
  }
  body {
    background: ${props => props.theme['base-1300']};
  }
  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`;