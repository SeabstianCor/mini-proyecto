import styled from "styled-components";

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  @media (max-width: 800px) {
    width: 30px;
    height: 3px;
    background: black;
    margin: 6px 0;
    margin-left: 50px;
  }

  @media (max-width: 450px) {
    margin-left: 50px;
  }
`;
