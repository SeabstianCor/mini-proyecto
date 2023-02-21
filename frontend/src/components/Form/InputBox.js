import React from "react";
import { InputGroup } from "../style/signUpPage/InputGroup.styled";
import { Highlight } from "../style/signUpPage/Highlight.styled";

function InputBox({ id, type, name, value, onChange, label }) {
  return (
    <InputGroup>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
      <Highlight></Highlight>
      <span></span>

      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
}

export default InputBox;
