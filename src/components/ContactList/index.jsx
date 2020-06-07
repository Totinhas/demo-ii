import React from "react";
import "./ContactList.css";
import Contact from "../Contact";

const ContactList = ({ className, listOfContacts, onEdit, onDelete }) => (
  <table className={`contact-list-base${className ? ` ${className} ` : ""}`}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {listOfContacts.length ? (
        listOfContacts.map((contact) => (
          <Contact
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <div>No contacts present here yet</div>
      )}
    </tbody>
  </table>
);

export default ContactList;
