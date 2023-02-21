import React, { useContext, useEffect, useState } from "react";
import { deleteProduct, updateProduct } from "../../utils/DataFetch/DataFetch";
import MaterialTable from "material-table";
import { Button } from "../style/landingPage/Button.styled";
import { TableContainer } from "../style/DataTable/TableContainer.styled";
import { VscAdd } from "react-icons/vsc";
import CreateForm from "../Form/CreateForm";
import { getToken } from "../../utils/Token/Token";
import { userContext } from "../../context/User/userContext";
import { navbarContext } from "../../context/Navbar/navbarContext";
import { useToggle } from "../../utils/CustomHooks/customHooks";

function DataTable({ postData }) {
  const [data, setData] = useState();
  const { user } = useContext(userContext);
  const { navbar } = useContext(navbarContext);
  const role = user.userData.userRole;

  const [active, { handleTrue, handleFalse }] = useToggle();
  const token = getToken();

  useEffect(() => {
    setData(postData);
  }, [postData]);

  const columns = [
    {
      title: "Id",
      field: "id",
      editable: "never",
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Price",
      field: "price",
    },
    {
      title: "Expired",
      field: "expired",
    },
    {
      title: "Category",
      field: "category",
    },
  ];

  return (
    <TableContainer display={navbar ? "none" : ""}>
      <Button onClick={handleTrue}>
        <VscAdd />
      </Button>
      {active === true && (
        <CreateForm setActive={handleFalse} state={[data, setData]} />
      )}
      <MaterialTable
        title="Inventario"
        columns={columns}
        data={data}
        editable={
          role === "admin"
            ? {
                onRowUpdate: async (newData, oldData) => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  const product = newData;
                  await updateProduct(
                    product.id,
                    token,
                    product.name,
                    product.price,
                    product.expired,
                    product.category
                  );
                },
                onRowDelete: async (oldData) => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  const product = oldData;
                  await deleteProduct(product.id, token);
                },
              }
            : {}
        }
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </TableContainer>
  );
}

export default DataTable;
