import React from "react";
import { StyledHeader } from "../style/landingPage/Header.styled";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
