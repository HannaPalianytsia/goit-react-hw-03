import styles from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <FaUser size={20} />
          <p>{name}</p>
        </div>
        <div className={styles.userInfo}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={styles.cardBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
