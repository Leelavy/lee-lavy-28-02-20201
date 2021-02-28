import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: #EAEDF2;
  }
  
`;

export default GlobalStyles;