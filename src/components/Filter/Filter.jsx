import {useDispatch } from 'react-redux';
import { updFilter } from '../../redux/slice';
import { FiterInput } from './Filter.styled';



export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
      const query = event.target.value;
      console.log(query)
      dispatch(updFilter(query));
  };
  
    return (
        <FiterInput
            onChange={onChange}

            placeholder='Filter'
            type="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
    );
};