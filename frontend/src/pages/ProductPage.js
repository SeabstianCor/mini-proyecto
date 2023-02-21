import React from "react";
import { Outlet } from "react-router-dom";

function ProductPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProductPage;
