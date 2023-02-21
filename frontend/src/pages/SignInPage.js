import React, { useState, useContext } from "react";
import InputBox from "../components/Form/InputBox";
import { FormContainer } from "../components/style/signUpPage/FormContainer.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { theme } from "../components/style/theme";
import { Form } from "../components/style/signUpPage/Form.styled";
import { Button } from "../components/style/landingPage/Button.styled";
import { userContext } from "../context/User/userContext";
import { postSignIn } from "../utils/DataFetch/DataFetch";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { setToken } from "../utils/Token/Token";

function SignInPage() {
  const { user, setUser } = useContext(userContext);

  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const fetch = await postSignIn(userData.username, userData.password);

      if (fetch) {
        Swal.fire({
          icon: "success",
          title: "Success",
        });
        setUser({
          ...user,
          isUserLogin: true,
          userData: {
            username: userData.username,
            userRole: fetch.data.role,
          },
        });
        setToken(fetch.data.token);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Not Found",
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles bg={theme.palette.primary} />
      <FormContainer>
        <h3>Sign In</h3>
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
          <Link to="/signup">
            <p>SignUp</p>
          </Link>
          <Button type="submit">Sign In</Button>
        </Form>
      </FormContainer>
    </ThemeProvider>
  );
}

export default SignInPage;
