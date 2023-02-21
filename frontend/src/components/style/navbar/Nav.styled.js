import styled from "styled-components";

export const Nav = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);

  section {
    display: flex;
    align-items: center;
    padding-right: 35px;
  }

  img {
    width: 2em;
    padding-right: 7em;
  }

  button {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
  }

  @media (max-width: 450px) {
    display: flex;
    section {
      padding: 0;
    }

    button {
      padding: 15px 25px;
    }
  }
`;
