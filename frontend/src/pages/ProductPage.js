import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable/DataTable";
import Navbar from "../components/Navbar/Navbar";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { getProduct } from "../utils/DataFetch/DataFetch";
import { getToken } from "../utils/Token/Token";

function ProductPage() {
  const [post, setPost] = useState([]);
  const token = getToken();

  const fetchData = async () => {
    const res = await getProduct(token);
    setPost(res.data);
  };

  useEffect(() => {
    fetchData();
    // ^ Comentario para deshabilitar un warning debido a fecthData fuera del useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <DataTable postData={post} />
    </div>
  );
}

export default ProductPage;
