import { FormGroup, TextField, Container } from '@material-ui/core';
import React, { useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import ContactsContext from '../context/contacts-context';
import uuid from 'react-uuid';

const CreateEditContact = () => {
  const context = useContext(ContactsContext);
  const { id } = useParams();
  console.log( id)
  let contact = context.contacts.find((contact) => contact.id == id ) || {};

  const editMode = !!id || !!contact;
  const [redirect, setRedirect] = useState(false);
  const [name, setName] = useState(contact.name || '')
  const [email, setEmail] = useState(contact.email || '')
  const [phone, setPhone] = useState(contact.phone || '')

  if(redirect){
    return <Redirect to='/'></Redirect>;
  }
  
  return (
    <Container>
      <FormGroup noValidate autoComplete="off">
        <TextField
          label="Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)} />
        <TextField
          label="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />

      <Button onClick={() => {
        context.updateContact({ name, phone, email, id: contact.id ? contact.id : uuid() });
        setRedirect(true);
       }
    }>{ id ? 'Update Contact': 'Create Contact' }</Button>
      </FormGroup>
    </Container>
  );
};

export default CreateEditContact;