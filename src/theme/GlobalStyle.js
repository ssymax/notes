import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding-left: 150px;
    font-size: 10px;
    font-family: "Poppins", serif;
  }
`;

export default GlobalStyle;
