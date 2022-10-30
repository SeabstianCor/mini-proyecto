import React, { useState } from "react";
import { createProduct } from "../../utils/DataFetch/DataFetch";
import { Button } from "../style/landingPage/Button.styled";
import { GlobalStyles } from "../style/landingPage/Global";
import { Form } from "../style/signUpPage/Form.styled";
import { FormContainer } from "../style/signUpPage/FormContainer.styled";
import { IoCloseSharp } from "react-icons/io5";
import InputBox from "./InputBox";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/Token/Token";

function CreateForm({ setActive }) {
  const navigate = useNavigate();
  const token = getToken();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    expired: "",
    category: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(productData);

    try {
      await createProduct(
        token,
        productData.name,
        productData.price,
        productData.expired,
        productData.category
      );
      Swal.fire({
        icon: "success",
        title: "Success",
      });
      navigate(0);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este producto ya existe",
      });
    }
  };

  return (
    <div>
      <GlobalStyles />
      <FormContainer>
        <p>
          New Product <IoCloseSharp onClick={() => setActive(false)} />
        </p>
        <Form onSubmit={handleOnSubmit}>
          <InputBox
            id="name"
            type="text"
            name="name"
            value={productData.name}
            label="Name"
            onChange={handleOnChange}
          />
          <InputBox
            id="price"
            type="number"
            name="price"
            value={productData.price}
            label="Price"
            onChange={handleOnChange}
          />
          <InputBox
            id="expired"
            type="text"
            name="expired"
            value={productData.expired}
            label="Expired"
            onChange={handleOnChange}
          />
          <InputBox
            id="category"
            type="text"
            name="category"
            value={productData.category}
            label="Category"
            onChange={handleOnChange}
          />
          <Button type="submit">Create</Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default CreateForm;
