import React from "react";
import { Logo, StyledHeader } from "../style/landingPage/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Logo src="./images/Elixir.webp" alt="elixir"></Logo>
    </StyledHeader>
  );
}

export default Header;
