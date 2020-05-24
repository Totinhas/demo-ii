import React, { useState } from "react";
import "./App.css";
import { ContactList, ContactManager } from "./components";

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "pippi", phone: "123456", email: "none@none.com" },
    { name: "cat", phone: "123456", email: "none@none.com" },
    { name: "feline", email: "none@none.com" },
  ]);

  const addContacts = (data) => {
    setContacts(contacts.concat(data));
  };

  return (
    <div className="app">
      <ContactManager onSubmit={addContacts} />
      <ContactList listOfContacts={contacts} />
    </div>
  );
};

export default App;
