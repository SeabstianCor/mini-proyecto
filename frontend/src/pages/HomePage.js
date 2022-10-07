import React from "react";
import Header from "../components/landingPage/Header";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";

function HomePage() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Header />
    </div>
  );
}

export default HomePage;
