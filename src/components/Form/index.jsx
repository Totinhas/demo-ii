import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";
import Validation from "../../functions/validation";
import formStructure from "../../constants/formStructure";

import { Input } from "..";

const Form = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(data);
  const [errorShow, setErrorShow] = useState({
    name: false,
    phone: false,
    email: false,
  });
  useEffect(() => {
    setFormData(data);
  }, [data]);
  const onChange = (event) =>
    setFormData({ ...formData, [event.target.id]: event.target.value });
  const onClick = (event) => event.stopPropagation();
  const onSubmitWrapper = (event) => {
    event.preventDefault();
    setErrorShow({
      name: !Validation.name(formData.name),
      phone: !Validation.phone(formData.phone),
      email: !Validation.email(formData.email),
    });

    if (
      Validation.name(formData.name) &&
      Validation.phone(formData.phone) &&
      Validation.email(formData.email)
    ) {
      onSubmit(formData);
    }
  };

  return (
    <form onClick={onClick} className="form" onSubmit={onSubmitWrapper}>
      {formStructure.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          name={input.name}
          onChange={onChange}
          value={formData[input.id]}
          errorMessage={input.errorMessage}
          errorShow={errorShow[input.id]}
          type={input.type}
        />
      ))}
      <Input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
