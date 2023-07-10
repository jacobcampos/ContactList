import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ContactRow from './ContactRow.jsx';

export default function SelectedContact ({ selectedContactId, setSelectedContactId }) {

const [contact, setContact] = useState([]);
    
useEffect(() => {
  async function fetchContact() {
    try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
},[]);

    return (
        <div>
            <h2>Contact - {contact.id}</h2>
            <p>{contact.name}</p>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>

            <button onClick={() => setSelectedContactId(null)}>Back to List</button> 
        </div>
    )
}