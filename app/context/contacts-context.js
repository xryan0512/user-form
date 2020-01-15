import React from 'react';

export default React.createContext({
  contacts: [],
  isLoading: false,
  deleteContact: (contactId) => {},
  updateContact: (contact) => {},
});