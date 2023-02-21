import React from "react";
import { StyledIcons } from "../style/landingPage/SocialIcons.styled";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
function SocialIcons() {
  return (
    <StyledIcons>
      <li>
        <a href="/">
          <BsFacebook />
        </a>
        <a href="/">
          <BsTwitter />
        </a>
        <a href="/">
          <BsInstagram />
        </a>
      </li>
    </StyledIcons>
  );
}

export default SocialIcons;
