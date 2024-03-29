import React from "react";
import { Hero } from "../style/homePage/Hero.styled";
import { Button } from "../style/landingPage/Button.styled";

function Home() {
  return (
    <Hero>
      <h4>Trade-in-offer</h4>
      <h2> Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons up to 70% off! </p>
      <Button>Shop now</Button>
    </Hero>
  );
}

export default Home;
