import stlyed , { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.body};
  }
`;

