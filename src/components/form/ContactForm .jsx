import { useDispatch } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { addContact } from '../../redux/contacts/contactsSlice';
import s from './ContactForm.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  const dispatch = useDispatch();

  const onFormChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };
  return (
    <>
      <form className={s.form} onSubmit={onFormSubmit}>
        <input
          onChange={onFormChange}
          type="text"
          name="name"
          placeholder="Don Quixote"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={onFormChange}
          type="tel"
          name="number"
          placeholder="+38(033)-11-22"
          required
        />
        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
