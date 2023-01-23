//import {useState } from "react";
import { useDispatch } from 'react-redux';
import { add } from '../../redux/slice';
import {  FormInputs } from './Form.styled';
//Btn,

export function Form() {

        const dispatch = useDispatch();
        const handleAddContact = (e) => {
                //console.log(e.target.elements.number.value);
                //console.log(e.target.elements.name.value);
                e.preventDefault();

                const { elements: { name, number } } = e.currentTarget;

                dispatch(add({number: number.value, name: name.value}))
                e.currentTarget.reset();
        };
    
        return (

                <FormInputs onSubmit={handleAddContact}>
                        <label >Name
                                <input
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                        required
                                />
                        </label>
                        <label >Number
                                <input
                                        placeholder="Number"
                                        type="tel"
                                        name="number"
                                />
                        </label>
                        <button type="submit">Add</button>
        
                </FormInputs>
        );
};
