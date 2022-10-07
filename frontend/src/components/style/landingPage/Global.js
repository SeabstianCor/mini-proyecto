import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.google.com/specimen/Poppins');
  @import url("https://fonts.google.com/specimen/Open+Sans");
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-image: ${({ bi }) => bi};
    background-color: ${({ bg }) => bg};
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.15em;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: white;
    opacity:0.8;
    line-height:1.5;
    }

    img {
      max-width:100%;
    }
`;
