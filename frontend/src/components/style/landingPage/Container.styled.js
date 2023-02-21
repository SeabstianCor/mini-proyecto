import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout};
  justify-content: center;
  align-items: start;

  img {
    padding: 0 40px;
  }

  h1 {
    padding: 9px 0;
    font-weight: 600;
  }
  p {
    font-weight: 400;
    padding-bottom: 20px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      padding: 6px 0;
      font-size: 25px;
    }

    img {
      padding-bottom: 70px;
      width: 60%;
    }

    p {
      width: 88%;
      font-size: larger;
      font-weight: bold;
      padding-top: 30px;
      text-align: center;
    }

    button {
      padding-bottom: 0.9rem;
    }
  }
`;
