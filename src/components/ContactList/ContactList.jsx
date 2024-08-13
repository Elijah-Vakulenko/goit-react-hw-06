

import React from 'react';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";


const ContactList = () => {

  const contacts = useSelector(selectContacts);

   const filter = useSelector(selectFilter) 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;