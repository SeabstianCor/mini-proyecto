import React from "react";
import { StyledIcons } from "./style/SocialIcons.styled";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
function SocialIcons() {
  return (
    <StyledIcons>
      <li>
        <a href="http://localhost:3000/">
          <BsFacebook />
        </a>
        <a href="http://localhost:3000/">
          <BsTwitter />
        </a>
        <a href="http://localhost:3000/">
          <BsInstagram />
        </a>
      </li>
    </StyledIcons>
  );
}

export default SocialIcons;
