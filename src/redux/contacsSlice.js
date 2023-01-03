import { createSlice } from "@reduxjs/toolkit";
import { contactsList } from "../data/data";
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState:{contacts:contactsList},
  reducers: {
    addСontact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({id,name, number,}) {
        return {
          payload: {
            id,
            name,
            number,
          }
        };
      },
    },

    deleteСontact:(state, action)=> {
     state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  }
});


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'] 
}


export const contactsReducer = persistReducer(persistConfig,
  contactsSlice.reducer);


export const { addСontact, deleteСontact } = contactsSlice.actions;
