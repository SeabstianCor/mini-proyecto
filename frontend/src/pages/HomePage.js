import React from "react";
import Home from "../components/homePage/Home";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";

function HomePage() {
  return (
    <div>
      <GlobalStyles />
      <Navbar showHome={true} />
      {/* <Home /> */}
    </div>
  );
}

export default HomePage;
