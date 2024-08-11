import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';


const App = () => {
  return (
     <div className={s.wrapper}>
      <div className={s.logo}>
        <GiRotaryPhone className={s.icon} />
        <h1 className={s.title}><span>P</span>honebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App