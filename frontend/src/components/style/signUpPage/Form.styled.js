import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
  }

  p {
    text-decoration: underline;
    font-size: medium;
    padding: 0 30px;
    margin: 5px;
    position: absolute;
    color: black;
  }

  a {
    padding: 0.3em 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
