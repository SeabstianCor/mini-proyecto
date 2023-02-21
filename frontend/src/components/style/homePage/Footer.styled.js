import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  hr {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }

  ul {
    list-style: none;
  }
  h3 {
    font-size: 1.9rem;
    font-weight: bold;
    text-transform: capitalize;
    line-height: 3rem;
  }

  p {
    max-width: 500px;
    margin: 18px auto;
    line-height: 28px;
    font-size: 14px;
  }

  li {
    margin: 10px;
  }

  a {
    font-size: 1.2rem;
    padding-right: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.accent};
  }
`;
