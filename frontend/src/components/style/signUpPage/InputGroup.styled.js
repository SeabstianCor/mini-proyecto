import styled from "styled-components";

export const InputGroup = styled.div`
  margin-top: 20px;
  padding: 0 30px;

  input {
    font-size: 15px;
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid #757575;
    padding: 10px 0;
  }

  input:focus {
    outline: none;
  }

  label {
    color: #999;
    font-size: 15px;
    font-weight: normal;
    pointer-events: none;
    left: 40px;
    top: 30px;
    transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    color: #5468ff;
  }
  span {
    position: relative;
    display: block;
    padding: 0 30px;
  }

  span:before,
  span:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5468ff;
    transition: 0.2s ease all;
  }

  span:before {
    left: 50%;
  }

  span:after {
    right: 50%;
  }

  input:focus ~ span:before,
  input:focus ~ span:after {
    width: 50%;
  }
`;
