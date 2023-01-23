import { configureStore } from '@reduxjs/toolkit';
import { valueSlise, contactsSlice, filterSlice } from './slice';





export const store = configureStore({
    reducer: {
        value: valueSlise.reducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
});


