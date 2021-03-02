import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${props => props.theme.palette.primary.main};
    }
    &::-webkit-scrollbar-track{
      background-color: ${props => props.theme.palette.secondary.main};
    }

  }

  #root {
    height: 100vh;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.theme.palette.common.body};
  }
  
`;

export default GlobalStyles;