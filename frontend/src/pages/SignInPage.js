import React, { useState, useContext } from "react";
import InputBox from "../components/Form/InputBox";
import { FormContainer } from "../components/style/signUpPage/FormContainer.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/style/landingPage/Global";
import { theme } from "../components/style/theme";
import { Form } from "../components/style/signUpPage/Form.styled";
import { Button } from "../components/style/landingPage/Button.styled";
import { userContext } from "../context/User/userContext";
import Header from "../components/landingPage/Header";
import { postSignIn } from "../components/DataFetch/DataFetch";

function SignInPage() {
  const { user, setUser } = useContext(userContext);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const status = await postSignIn(input.username, input.password);
    console.log(status);

    if (status) {
      setUser({
        ...user,
        isUserLogin: true,
        userData: { username: input.username, userRole: "string" },
      });
    } else {
      console.log("error");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles bg={theme.palette.secondary} />
      <Header />
      <FormContainer>
        <Form onSubmit={handleOnSubmit}>
          <InputBox
            id="username"
            type="text"
            name="username"
            value={input.username}
            label="Username"
            onChange={handleOnChange}
          />
          <InputBox
            id="password"
            type="password"
            name="password"
            value={input.password}
            label="Password"
            onChange={handleOnChange}
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </FormContainer>
    </ThemeProvider>
  );
}

export default SignInPage;
