import React, { useState } from 'react';
import { Container, Button, Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';
import { Link } from "react-router-dom";
import ContactsContext from '../context/contacts-context';

const ContactList = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContactsContext.Consumer>
      { ({ contacts }) => (
          <Container>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Phone Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map(contact => (
                    <TableRow key={contact.email}>
                      <TableCell component="th" scope="row">
                        {contact.name}
                      </TableCell>
                      <TableCell align="center">{contact.email}</TableCell>
                      <TableCell align="center">{contact.phone}</TableCell>
                      <TableCell align="right"><Link to={`/create-edit-contact/${contact.id}`} color="primary">Edit</Link></TableCell>
                      <TableCell align="right"><Button>Delete</Button></TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        )
      }
    </ContactsContext.Consumer>
  );
};

export default ContactList;