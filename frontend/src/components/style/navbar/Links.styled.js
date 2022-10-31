import styled from "styled-components";

export const Links = styled.nav`
  @media (max-width: 800px) {
    height: ${({ height }) => height};
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.palette.secondary};
    transition: 0.2s;
    overflow: hidden;

    ul {
      display: block;
      width: fit-content;
      margin: 80px auto 0 auto;
      text-align: center;
      transition: 0.5s;
      opacity: ${({ opacity }) => opacity};
    }

    ul li a {
      color: white;
    }
  }
`;
