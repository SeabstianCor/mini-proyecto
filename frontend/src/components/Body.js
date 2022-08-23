import React from "react";
import { Button } from "./style/Button.styled";
import { Container } from "./style/Container.styled";

function Body() {
  return (
    <Container layout="row">
      <img src="./images/illustration-mockups.svg" alt="" />
      <Container layout="column">
        <h1>Build The Community</h1>
        <h1>Yours Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Register</Button>
      </Container>
    </Container>
  );
}

export default Body;
