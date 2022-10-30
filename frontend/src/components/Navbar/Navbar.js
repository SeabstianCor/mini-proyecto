import React, { useContext, useState } from "react";
import { List } from "../style/navbar/List.styled";
import { Nav } from "../style/navbar/Nav.styled";
import { Button } from "../style/landingPage/Button.styled";
import { userContext } from "../../context/User/userContext";
import { HashLink as Link } from "react-router-hash-link";
import { delToken } from "../../utils/Token/Token";
import { Hamburger, Line } from "../style/navbar/Hamburger.styled";
import { Links } from "../style/navbar/Links.styled";

function Navbar({ showHome }) {
  const { user, setUser } = useContext(userContext);
  const [active, setActive] = useState(false);
  const handleLogout = () => {
    setUser({ ...user, isUserLogin: false });
    delToken();
  };

  return (
    <Nav>
      <section>
        <img src="./images/Elixir.webp" alt="elixir"></img>
      </section>
      <Links
        height={active === false ? "0" : "450px"}
        opacity={active === false ? "0" : "1"}
      >
        <List>
          <li>
            <a href="/home">
              <span>Home</span>
            </a>
          </li>
          <li>
            <Link to="/product">
              <span>Product</span>
            </Link>
          </li>
          <li>
            {showHome === true ? (
              <Link to="#about" smooth>
                About
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {showHome === true ? (
              <Link to="#contact" smooth>
                Contact
              </Link>
            ) : (
              ""
            )}
          </li>
        </List>
      </Links>
      <section>
        <Button onClick={handleLogout}>Logout</Button>
        <Hamburger onClick={() => setActive(!active)}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburger>
      </section>
    </Nav>
  );
}

export default Navbar;
