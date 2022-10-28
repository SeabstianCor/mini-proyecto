import React from "react";
import Feature from "../components/homePage/Feature";
import Home from "../components/homePage/Home";
import About from "../components/homePage/About";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";
import Footer from "../components/homePage/Footer";

function HomePage() {
  return (
    <div>
      <GlobalStyles />
      <Navbar showHome={true} />
      <Home />
      <Feature />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
