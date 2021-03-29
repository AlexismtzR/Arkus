import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {loadContacts} from '../redux/Reducer'
import { Link } from 'react-router-dom'
import Add from './Add'

import "./Style.scss"

export class ContactList extends Component {

    componentDidMount(){
        this.props.loadContacts()
    }

     fabStyle = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    render() {
        return (
            <div>
                <h1>CONTACT LIST</h1>
                    <div className="flex">
                        {
                            this.props.contacts.map((contact, key) =>{
                                return(
                                    <div className="container" key={key}>
                                        <Link to={`/ContactDetail/${contact.id}`}>
                                        <img src={contact.avatar} alt="Avatar"/>
                                        </Link>
                                        <div className="content">
                                        <p style={{marginBottom:"0"}}>{contact.first_name} {contact.last_name}</p>
                                        <p style={{marginTop:"5px"}}><Add order={"edit"} fname={contact.first_name} lname={contact.last_name} email={contact.email} id={contact.id}/> <FontAwesomeIcon icon={faTimes}/></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Add order={"add"}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        contacts: state.contacts
})

const mapDispatchToProps = {
    loadContacts,
} 


export default connect(mapStateToProps, mapDispatchToProps)(ContactList)


