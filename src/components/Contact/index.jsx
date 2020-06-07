import React from "react";

const DEFAULT_VAL = "N/A";

const Contact = ({
  name = DEFAULT_VAL,
  email = DEFAULT_VAL,
  phone = DEFAULT_VAL,
  onEdit,
  onDelete,
}) => {
  const onEditWrapper = (event) => {
    onEdit({ name, phone, email });
  };
  const onDeleteWrapper = (event) => {
    onDelete(email);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <span aria-label="edit" role="img" onClick={onEditWrapper}>
          🖋️
        </span>
      </td>
      <td>
        <span aria-label="delete" role="img" onClick={onDeleteWrapper}>
          ❌
        </span>
      </td>
    </tr>
  );
};

export default Contact;
