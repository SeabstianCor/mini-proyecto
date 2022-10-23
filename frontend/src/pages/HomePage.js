import React from "react";
import Home from "../components/homePage/Home";
import Header from "../components/landingPage/Header";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";

function HomePage() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Header />
      {/* <Home /> */}
    </div>
  );
}

export default HomePage;
