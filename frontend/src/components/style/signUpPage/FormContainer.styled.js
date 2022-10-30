import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 150px auto;
  padding: 20px 0;
  border-radius: 10px;
  width: 300px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 5s ease-out;

  button {
    margin-top: 30px;
  }

  svg {
    cursor: pointer;
    height: 1.4rem;
    width: 1.4rem;
  }

  h3 {
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: center;
  }

  p {
    padding-left: 3.5rem;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: space-evenly;
  }
`;
