import React from 'react';
import { useSelector } from "react-redux";
import "./Style.scss"

const ContactDetail = ({match}) => {

   const contacts = useSelector((state) => state.contacts);
   const id = match.params.userid
   const contact = contacts.find( element => element.id == id)

    return (
        <div className="flex">
            <div className="container2">
                <img src={contact.avatar} alt="Avatar"/>
                <div className="content">
                    <p>{contact.first_name} {contact.last_name}</p>
                    <p>Email: {contact.email}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;