import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-image: ${({ bi }) => bi};
    background-color: ${({ bg }) => bg};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.15em;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: black;
    line-height:1.5;
    }

    img {
      max-width:100%;
    }
`;
