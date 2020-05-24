import React from "react";

const DEFAULT_VAL = "N/A";

const Contact = ({
  name = DEFAULT_VAL,
  email = DEFAULT_VAL,
  phone = DEFAULT_VAL,
}) => (
  <tr>
    <td>{name}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>
      <span aria-label="edit" role="img">
        🖋️
      </span>
    </td>
    <td>
      <span aria-label="delete" role="img">
        ❌
      </span>
    </td>
  </tr>
);

export default Contact;
