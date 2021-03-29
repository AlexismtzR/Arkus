export const ADD_CONTACT = "ADD_CONTACT";
export const SET_CONTACTS = "SET_CONTACTS";
export const EDIT_CONTACT = "EDIT_CONTACT";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

