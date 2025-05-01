import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #222;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #0070f3;

    &:hover {
      text-decoration: underline;
    }
  }
`;
