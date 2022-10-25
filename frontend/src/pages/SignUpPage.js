import React, { useState } from "react";
import InputBox from "../components/Form/InputBox";
import { FormContainer } from "../components/style/signUpPage/FormContainer.styled";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { theme } from "../components/style/theme";
import { Form } from "../components/style/signUpPage/Form.styled";
import { Button } from "../components/style/landingPage/Button.styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { postSignUp } from "../utils/DataFetch/DataFetch";
import Swal from "sweetalert2";

function SignUpPage() {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.password === userData.confirmPassword) {
      try {
        const fetch = await postSignUp(userData.username, userData.password);
        if (fetch) {
          // Success alert
          Swal.fire({
            icon: "success",
            title: "Success",
          });
          navigate("/signin", { replace: true });
        }
      } catch (error) {
        //Error alert
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Server error",
        });
      }
    } else {
      //Error alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match",
      });
    }
  };

  return (
    <>
      <GlobalStyles bg={theme.palette.primary} />
      <FormContainer>
        <p>Sign Up</p>
        <Form onSubmit={handleOnSubmit}>
          <InputBox
            id="username"
            type="text"
            name="username"
            value={userData.username}
            label="Username"
            onChange={handleOnChange}
          />
          <InputBox
            id="password"
            type="password"
            name="password"
            value={userData.password}
            label="Password"
            onChange={handleOnChange}
          />
          <InputBox
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            label="Confirm Password"
            onChange={handleOnChange}
          />
          <Link to="/signin">
            <p>SignIn</p>
          </Link>
          <Button type="submit">Sign Up</Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default SignUpPage;
