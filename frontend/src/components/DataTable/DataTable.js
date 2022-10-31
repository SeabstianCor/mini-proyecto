import React, { useContext } from "react";
import { deleteProduct, updateProduct } from "../../utils/DataFetch/DataFetch";
import MaterialTable from "material-table";
import { Button } from "../style/landingPage/Button.styled";
import { TableContainer } from "../style/DataTable/TableContainer.styled";
import { VscAdd } from "react-icons/vsc";
import CreateForm from "../Form/CreateForm";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/Token/Token";
import { userContext } from "../../context/User/userContext";
import { useToggle } from "../../utils/CustomHooks/customHooks";

function DataTable({ postData }) {
  const { user } = useContext(userContext);
  const role = user.userData.userRole;

  const [active, { handleTrue, handleFalse }] = useToggle();
  const navigate = useNavigate();
  const token = getToken();

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
    <TableContainer>
      <Button onClick={handleTrue}>
        <VscAdd />
      </Button>
      {active === true && <CreateForm setActive={handleFalse} />}
      <MaterialTable
        title="Inventario"
        columns={columns}
        data={postData}
        editable={
          role === "admin"
            ? {
                onRowUpdate: async (newData, oldData) => {
                  const dataUpdate = [...postData];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  const product = newData;
                  await updateProduct(
                    product.id,
                    token,
                    product.name,
                    product.price,
                    product.expired,
                    product.category
                  );
                  navigate(0);
                },
                onRowDelete: async (oldData) => {
                  const dataDelete = [...postData];
                  const index = oldData.tableData.id;
                  const product = dataDelete[index];
                  await deleteProduct(product.id, token);
                  navigate(0);
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
