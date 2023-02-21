import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../style/landingPage/Button.styled";
import { Container } from "../style/landingPage/Container.styled";

function Body() {
  return (
    <Container layout="row">
      <img src="./images/landingPage/illustration-mockups.svg" alt="" />
      <Container layout="column">
        <h1>Administra Tus Productos</h1>
        <h1>Desde Cualquier Lugar</h1>
        <p>
          Nosotros nos encargamos de administrar tus productos por ti. Se mas
          eficiente, registrate ya.
        </p>
        <Link to="/signup">
          <Button>Register</Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Body;
