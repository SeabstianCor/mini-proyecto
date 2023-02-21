import styled from "styled-components";

export const FeatureSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 40px 80px;

  div {
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
    border: 1px solid #cce7d0;
    border-radius: 4px;
    margin: 15px 0;
  }

  div:hover {
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
