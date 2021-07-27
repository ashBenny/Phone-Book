import React,{useState,useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';                                // To genarate different ids

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts] = useState([]);


  // addContactHandler is a function using for passing props from child to parent 
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id : uuid(),...contact}])
  };


  // removeContactHandler is a function using for passing props from child to parent
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id ;
    });
    setContacts(newContactList)
  };


  // Retrive local storage dats to diaplay in UI
  useEffect(()=>{
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrivedContacts ) {
      setContacts(retrivedContacts)}
  },[])

  // store the datas to local storage when updates
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])


  


  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = { addContactHandler }/>  
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
