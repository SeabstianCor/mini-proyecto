import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/User/userContext";
import { Button } from "../style/landingPage/Button.styled";
import { Container } from "../style/landingPage/Container.styled";

function Body() {
  const { user } = useContext(userContext);
  return (
    <Container layout="row">
      <img src="./images/landingPage/illustration-mockups.svg" alt="" />
      <Container layout="column">
        <h1>Compra Tus Productos</h1>
        <h1>Desde Cualquier Lugar</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/signup">
          <Button>Register</Button>
        </Link>
      </Container>
      {console.log(user)}
    </Container>
  );
}

export default Body;
