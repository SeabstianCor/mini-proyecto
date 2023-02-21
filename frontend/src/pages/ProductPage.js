import React from "react";
import DataTable from "../components/DataTable/DataTable";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { useFetch } from "../utils/CustomHooks/customHooks";
import { getProduct } from "../utils/DataFetch/DataFetch";

function ProductPage() {
  const [data] = useFetch(getProduct);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <DataTable postData={data} />
    </div>
  );
}

export default ProductPage;
