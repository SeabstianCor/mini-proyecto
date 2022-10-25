import React from "react";
import DataTable from "../components/DataTable/DataTable";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";

function ProductPage() {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <DataTable />
    </div>
  );
}

export default ProductPage;
