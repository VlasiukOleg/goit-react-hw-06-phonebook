import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookInitialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: phoneBookInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: shortid.generate(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  phoneBookSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const counterReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
