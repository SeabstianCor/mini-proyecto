import React, { useContext, useEffect } from "react";
import { List } from "../style/navbar/List.styled";
import { Nav } from "../style/navbar/Nav.styled";
import { Button } from "../style/landingPage/Button.styled";
import { userContext } from "../../context/User/userContext";
import { HashLink as Link } from "react-router-hash-link";
import { Hamburger, Line } from "../style/navbar/Hamburger.styled";
import { Links } from "../style/navbar/Links.styled";
import { useToggle } from "../../utils/CustomHooks/customHooks";
import { navbarContext } from "../../context/Navbar/navbarContext";

function Navbar({ showHome }) {
  const { user, setUser } = useContext(userContext);
  const { setNavbar } = useContext(navbarContext);
  const [active, { handleToggle }] = useToggle();

  useEffect(() => {
    setNavbar(active);
  }, [active, setNavbar]);

  const handleLogout = () => {
    setUser({ ...user, isUserLogin: false });
  };

  return (
    <Nav>
      <section>
        <img src="./images/Elixir.webp" alt="elixir"></img>
      </section>
      <Links height={active ? "450px" : "0"} opacity={active ? "2" : "0"}>
        <List>
          <li>
            <Link to="/home">
              <span>Home</span>
            </Link>
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
        <Hamburger onClick={handleToggle}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburger>
      </section>
    </Nav>
  );
}

export default Navbar;
