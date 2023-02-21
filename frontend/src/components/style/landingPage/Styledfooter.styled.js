import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 30px 70px;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
`;
