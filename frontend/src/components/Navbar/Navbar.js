import React, { useContext } from "react";
import { List } from "../style/navbar/List.styled";
import { Nav } from "../style/navbar/Nav.styled";
import { AiOutlineShopping } from "react-icons/ai";
import { Button } from "../style/landingPage/Button.styled";
import { userContext } from "../../context/User/userContext";
import { Link, NavLink } from "react-router-dom";

function Navbar({ showHome }) {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      <Nav>
        <section>
          <img src="./images/Elixir.webp" alt="elixir"></img>
        </section>
        <div>
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
            <li>{showHome === true ? <NavLink to={{}}>about</NavLink> : ""}</li>
            <li>{showHome === true ? <a href="#contact">Contact</a> : ""}</li>
          </List>
        </div>
        <section>
          <AiOutlineShopping style={{ color: "black" }} />
          <Button onClick={() => setUser({ ...user, isUserLogin: false })}>
            Logout
          </Button>
        </section>
      </Nav>
    </div>
  );
}

export default Navbar;
