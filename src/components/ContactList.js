import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{

    const delContact = (id) =>{
        props.deleteContactHandler(id)
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
          <ContactCard contact={contact} delContact={delContact}/>
        );
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;