import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
    padding: 0 20px;
  }

  li a {
    text-decoration: none;
    color: #000;
    font-weight: normal;
    font-size: 16px;
    transition: 0.3s ease;
  }

  li a:hover {
    color: ${({ theme }) => theme.palette.accent};
  }

  @media (max-width: 800px) {
    li {
      padding: 20px;
    }
  }
`;
