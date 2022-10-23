import styled from "styled-components";

export const Hero = styled.section`
  background-image: url("./images/home/tshirt-model2.jpg");
  height: 30em;
  width: 74.5em;
  background-size: cover;
  padding: 0 74px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    padding-bottom: 15px;
  }

  h1 {
    color: ${({ theme }) => theme.palette.accent};
  }
`;
