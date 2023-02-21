import React from "react";
import { FooterSection } from "../style/homePage/Footer.styled";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGoogle,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <FooterSection id="contact">
      <div>
        <hr />
        <h3>Volc</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul>
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
            <a href="/">
              <BsGoogle />
            </a>
            <a href="/">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>copyright &copy;2022 Volc.</p>
      </div>
    </FooterSection>
  );
}

export default Footer;
