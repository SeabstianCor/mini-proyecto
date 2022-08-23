import React from "react";
import { Nav, StyledHeader, Logo } from "./style/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.svg" alt="" />
      </Nav>
    </StyledHeader>
  );
}

export default Header;
