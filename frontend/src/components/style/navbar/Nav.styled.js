import styled from "styled-components";

export const Nav = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);

  section {
    display: flex;
    align-items: center;
  }

  img {
    width: 2em;
    padding-right: 7em;
  }

  button {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
  }

  svg {
    padding-right: 0.8em;
  }
`;
