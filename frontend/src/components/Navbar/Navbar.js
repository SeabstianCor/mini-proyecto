import React, { useContext } from "react";
import { List } from "../style/navbar/List.styled";
import { Nav } from "../style/navbar/Nav.styled";
import { AiOutlineShopping } from "react-icons/ai";
import { Button } from "../style/landingPage/Button.styled";
import { userContext } from "../../context/User/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setUser } = useContext(userContext);
  function logout() {
    setUser({ isUserLogin: false });
  }
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
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <a href="/home">about</a>
            </li>
            <li>
              <a href="/home">Contact</a>
            </li>
          </List>
        </div>
        <section>
          <AiOutlineShopping style={{ color: "black" }} />
          <Button onClick={logout}>Logout</Button>
        </section>
      </Nav>
    </div>
  );
}

export default Navbar;
