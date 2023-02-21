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
`;
