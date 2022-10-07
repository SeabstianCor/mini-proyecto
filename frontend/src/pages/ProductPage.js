import React, { useContext } from "react";
import Header from "../components/landingPage/Header";
import { userContext } from "../context/User/userContext";

function ProductPage() {
  const { value } = useContext(userContext);
  return (
    <div>
      <Header />
      {console.log(value)}
      product
    </div>
  );
}

export default ProductPage;
