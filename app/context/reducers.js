export const FETCH_CONTACTS_STARTED = 'FETCH_CONTACTS_STARTED';
export const FETCH_CONTACTS_DONE = 'FETCH_CONTACTS_DONE';
export const UPDATE_OR_CREATE_CONTACT_DONE = 'UPDATE_OR_CREATE_CONTACT_DONE';

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_STARTED:
      return { ...state, isLoading: true, };
    case FETCH_CONTACTS_DONE:
      return { ...state, isLoading: false, contacts: action.contacts };
    case UPDATE_OR_CREATE_CONTACT_DONE:
      const id = action.contact.id;
      const contacts = state.contacts.filter(contact => contact.id !== id);
      return { ...state, isLoading: false, contacts: [...contacts, action.contact] };
    default:
      return state;
  }
}