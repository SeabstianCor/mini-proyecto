import React, { useContext, useEffect, useState } from "react";
import { getProduct } from "../../utils/DataFetch/DataFetch";
import MUIDataTable from "mui-datatables";
import { userContext } from "../../context/User/userContext";

function DataTable() {
  const { user } = useContext(userContext);
  const [post, setPost] = useState([]);
  const token = user.userData.token;

  const fetchData = async () => {
    const res = await getProduct(token);
    setPost(res.data);
  };

  useEffect(() => {
    fetchData();
    // ^ Comentario para deshabilitar un warning debido a fecthData fuera del useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "name",
      label: "Nombre",
    },
    {
      name: "price",
      label: "Precio",
    },
    {
      name: "expired",
      label: "Expira",
    },
    {
      name: "category",
      label: "Categoria",
    },
  ];

  return (
    <>
      <div>
        <MUIDataTable columns={columns} data={post} />
      </div>
    </>
  );
}

export default DataTable;
