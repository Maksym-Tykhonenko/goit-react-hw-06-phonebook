//import {List, ListItem, Name, Number, DelBtn} from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { del } from '../../redux/slice';


export const ContactList = () => {
    
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    function visibleContacts(contacts, filter) {
        if (filter === '') {
          return contacts;
        }
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter)
        );
    }

    const dispatch = useDispatch();
    const onDeleteContact = (contact) => dispatch(del(contact));


    return (
        <ul>
            {visibleContacts(contacts, filter).map(contact => {
                return (
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                        <button
                            type='button'
                            onClick={() => onDeleteContact(contact.id)}>DEL</button>
                    </li>
                )
            })}
        </ul>
    );
};