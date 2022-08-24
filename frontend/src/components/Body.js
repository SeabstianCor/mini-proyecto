import React from "react";
import { Button } from "./style/Button.styled";
import { Container } from "./style/Container.styled";

function Body() {
  return (
    <Container layout="row">
      <img src="./images/illustration-mockups.svg" alt="" />
      <Container layout="column">
        <h1>Compra Tus Productos</h1>
        <h1>Desde Cualquier Lugar</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button>Register</Button>
      </Container>
    </Container>
  );
}

export default Body;
