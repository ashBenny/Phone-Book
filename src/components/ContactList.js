import React from 'react'
import ContactCard from './ContactCard';


function ContactList(props) {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map((contact)=>{
        return(
            < ContactCard contact={contact}  clickHandler={ deleteContactHandler } key={contact.id}/>
        )
    });

    return (
        <div className='ui celled list'>
            <h3>Saved Contacts</h3>
            {renderContactList}
        </div>
    )
}

export default ContactList;
