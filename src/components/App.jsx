//import { useState, useEffect } from "react";
import { increment, decrement } from '../redux/slice';
import { useSelector, useDispatch } from 'react-redux';


//import { nanoid } from 'nanoid';

import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import {Block } from "./App.styled";

export function App() {
const dispatch = useDispatch();
  const value = useSelector(state => state.value);
  
  const contacts = useSelector(state => state.contacts.items)
////////////////////////////
    return (
      <Block>
        <Section title='Caunter'>
          <button onClick={()=> dispatch(decrement(1))}>-</button>
            {value}
        <button onClick={() => dispatch(increment(1))}>+</button>
        </Section>
        <hr />
        <Section title='Форма'>
            <Form />
        </Section>
        <hr />
        {contacts.length > 0 ? (
          <Section title='Список контактів'>
            <Filter  />
            <ContactList />
          </Section>) : `СПИСОК КОНТАКТІВ ПОРОЖНІЙ`}
        
      </Block>
    );

};
