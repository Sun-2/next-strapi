import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
  
  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.palette.background.body};
    transition: background-color 0.5s;
  
    font-family: 'Merriweather', serif;
    font-size: 1.6rem;
  }
`;
