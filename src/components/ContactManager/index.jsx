import React from "react";
import "./ContactManager.css";

const ContactManager = ({ onClick }) => {
  return (
    <>
      <div className="contact-manager-add" onClick={onClick}>
        +
      </div>
    </>
  );
};

export default ContactManager;
