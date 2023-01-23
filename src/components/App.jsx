
import { useSelector } from 'react-redux';


//import { nanoid } from 'nanoid';

import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import {Block } from "./App.styled";

export function App() {
  
  const contacts = useSelector(state => state.contacts.items)

    return (
      <Block>
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
