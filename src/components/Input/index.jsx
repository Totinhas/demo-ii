import React from "react";
import "./Input.css";

const Input = ({
  id,
  onChange,
  value,
  errorMessage,
  type,
  errorShow,
  name,
}) => (
  <>
    {id && (
      <label className="input-label" htmlFor={id}>
        {`${name}: `}
      </label>
    )}
    <input
      id={id}
      className="input-input"
      onChange={onChange}
      value={value}
      type={type}
    />
    {errorShow && <p>{errorMessage}</p>}
  </>
);
export default Input;
