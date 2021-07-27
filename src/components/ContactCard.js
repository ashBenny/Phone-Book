import React from 'react';
import ContactList from './ContactList'


function ContactCard(props) {

    //destuructring

    const { id,name,email } = props.contact;

    return (
        <div className="item">
            <img src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png" alt="user" className='ui avatar image' />
                <div className="content">
                    <div className="header">Name : { name }</div>
                    <div>E-Mail : { email }</div>
                    <br/>
                    <button className='ui button small red' onClick={ ()=> props.clickHandler(id) }>Delete</button>
                </div>
                
                
                
            </div>
    )
}

export default ContactCard
