import styled from "styled-components";

export const Hero = styled.section`
  height: 20em;
  width: 25.5em;
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

  button {
    color: ${({ theme }) => theme.palette.secondary};
    border: 0.02em solid ${({ theme }) => theme.palette.secondary};
    background-color: ${({ theme }) => theme.palette.primary};
  }

  @media (max-width: 800px) {
    height: 20rem;
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 450px) {
    height: inherit;
    width: inherit;
  }
`;
