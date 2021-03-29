import { SET_CONTACTS, ADD_CONTACT, setContacts, EDIT_CONTACT, addContact } from "./Actions"
import axios from 'axios';

const initialState = {
  contacts: [],
}

export const Reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CONTACT: {
      return {...state, contacts: [...state.contacts, action.payload]}
    }
    case SET_CONTACTS: {
      return {...state, contacts: action.payload}
    }
    case EDIT_CONTACT: {
      const index = state.contacts.findIndex(contact => contact.id == action.payload.id); 
      console.log("INDEX "+index)
      const newArray = [...state.contacts]; 
      newArray[index].first_name = action.payload.first_name
      newArray[index].last_name = action.payload.last_name
      newArray[index].email = action.payload.email

      return { 
       ...state, 
       contacts: newArray, 
      }
    }
    default:
      return state
  }
}

export const loadContacts = () => async (dispatch, getState) => {
 try {
  const resp = await axios.get('https://reqres.in/api/users/');
  dispatch(setContacts(resp.data.data))
} catch (err) {
  // Handle Error Here
  console.error(err);
}
} 

export const addContacts = (data,object) => async (dispatch, getState) => {
 try {
   await axios.post('https://reqres.in/api/users',{ headers: {
    "Content-Type": "application/json",},data}).then((res) => {
    dispatch(addContact(object))
    console.log(res);
  })
 } catch (err) {
   // Handle Error Here
   console.error(err);
 }
 } 
