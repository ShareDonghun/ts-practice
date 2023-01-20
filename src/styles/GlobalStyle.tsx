import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1140px;
    min-width: 720px;
  }

  * {
    box-sizing: border-box;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
  }
`;

export default GlobalStyle;
