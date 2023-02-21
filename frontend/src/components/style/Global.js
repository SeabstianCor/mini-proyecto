import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.google.com/specimen/Poppins');
  @import url("https://fonts.google.com/specimen/Open+Sans");

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url("./images/bg-desktop.svg");
    background-color: ${({ theme }) => theme.colors.primaryViolet};
    color: white;
    font-family: 'Popins', sans-serif;
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
