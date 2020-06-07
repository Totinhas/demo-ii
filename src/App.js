import React, { useState } from "react";
import "./App.css";
import { initialValue } from "./constants";
import { ContactList, ContactManager, Form, Modal } from "./components";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedContact, setSelectedContact] = useState(initialValue);

  const onClick = () => {
    setIsExpanded(!isExpanded);
    setSelectedContact(initialValue);
  };

  const deleteContacts = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  const editContacts = (data) => {
    setSelectedContact(data);
    setIsExpanded(true);
  };

  const addContacts = (data) => {
    setSelectedContact(data);

    setContacts(
      contacts.filter((contact) => contact.email !== data.email).concat(data)
    );

    setIsExpanded(false);
  };

  return (
    <div className="app">
      <ContactManager onClick={onClick} />
      <ContactList
        listOfContacts={contacts}
        onDelete={deleteContacts}
        onEdit={editContacts}
      />
      <Modal onClick={onClick} isActive={isExpanded}>
        <Form onSubmit={addContacts} data={selectedContact} />
      </Modal>
    </div>
  );
};

export default App;
