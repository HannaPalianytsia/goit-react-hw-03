import { useState, useEffect } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import initialContacts from "./data/contacts.json";
import styles from "./App.module.css";
import { nanoid } from "nanoid";

function App() {
  //   model.id = nanoid();

  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    if (savedContacts) {
      return savedContacts;
    }
    return initialContacts;
  });

  const [searchedString, setSearchedString] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filterContacts = (event) => {
    setSearchedString(event.target.value.toLowerCase());
  };
  const handleSubmit = (values) => {
    setContacts((prevContactList) => {
      const newContactList = [...prevContactList];
      newContactList.push({
        ...values,
        id: nanoid(),
      });
      return newContactList;
    });
  };

  return (
    <div className={styles.layout}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox onFilterContacts={filterContacts} />
      <ContactList
        contacts={contacts}
        onDeleteContact={deleteContact}
        searchedString={searchedString}
      />
    </div>
  );
}

export default App;
