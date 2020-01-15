import React, { useReducer, useEffect} from 'react';
import { CircularProgress } from '@material-ui/core';

import ContactsContext from './contacts-context';
import { contactsReducer, FETCH_CONTACTS_DONE, FETCH_CONTACTS_STARTED, UPDATE_OR_CREATE_CONTACT_DONE } from './reducers';
import { fetchContacts } from '../services/contacts-api';


const GlobalState = props => {
  const initialState = {
    contacts: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(contactsReducer, initialState);

  useEffect(() => {
    dispatch({
      type: FETCH_CONTACTS_STARTED
    });

    fetchContacts()
      .then(contacts => {
        dispatch({
          contacts: contacts,
          type: FETCH_CONTACTS_DONE,
        })
      })
      .catch((err) => console.log(err))
  }, []);

  const updateContact = (contact) => {
    dispatch({
      contact,
      type: UPDATE_OR_CREATE_CONTACT_DONE,
    })
  }

  return (
    <ContactsContext.Provider value={{
      contacts: state.contacts,
      updateContact
    }}>
      {state.isLoading ? <CircularProgress /> : props.children}
    </ContactsContext.Provider>
  );
}

export default GlobalState;