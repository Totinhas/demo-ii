import React from "react";
import { useState } from "react";
import "./Form.css";
import { initialValue } from "../../constants";
import { Input } from "..";

const requiredFields = Object.keys(initialValue);

const Form = ({ data = initialValue, onSubmit }) => {
  const [formData, setFormData] = useState(data);
  const onChange = (event) =>
    setFormData({ ...formData, [event.target.id]: event.target.value });
  const onClick = (event) => event.stopPropagation();
  const onSubmitWrapper = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onClick={onClick} className="form" onSubmit={onSubmitWrapper}>
      {requiredFields.map((field) => (
        <Input
          key={field}
          id={field}
          onChange={onChange}
          defaultValue={formData[field]}
        />
      ))}
      <Input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
