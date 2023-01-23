import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

///////////////////////////////////////////////////////////
export const valueSlise = createSlice({
    name: "myValue",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + action.payload;
        },
        decrement(state, action) {
            return state - action.payload;
        }
    }
});
export const { increment, decrement } = valueSlise.actions;
///////////////////////////////////////////////////////////
const contactsInitialState = {items:[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        add(state, action) {

            state.items.push({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        
        del(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    }
});
export const { add, del } = contactsSlice.actions;
///////////////////////////////////////////////////////////
export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        updFilter(state, action) {
            return (state = action.payload);
        },
        changeFilter: (state, action) => {
      state.contacts.filter = action.payload;
        },
        setFilter(state, action) {
            state.splice(0,1,action.payload);
        },
    }
});
export const {updFilter, changeFilter, setFilter} = filterSlice.actions;