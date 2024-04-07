import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact, searchedString }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ name, number, id }) => {
        const isStringIncluded = name.toLowerCase().includes(searchedString);
        return (
          <li
            key={id}
            className={styles.card}
            style={{ display: isStringIncluded ? "block" : "none" }}
          >
            <Contact
              number={number}
              name={name}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
