import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
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