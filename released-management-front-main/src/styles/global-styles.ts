// src/styles/global-styles.ts
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    // width: 375px;
    height: 100%;
    // overflow: hidden;
  }

  * {
    // box-sizing: border-box;
  }
`;

export default GlobalStyle;
