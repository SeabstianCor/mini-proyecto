import React from "react";
import { AboutSection } from "../style/homePage/About.styled";

function About() {
  return (
    <AboutSection id="about">
      <div>
        <img src="/images/home/about.png" alt="phone" />
      </div>
      <div>
        <h2>Who are we?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </AboutSection>
  );
}

export default About;
