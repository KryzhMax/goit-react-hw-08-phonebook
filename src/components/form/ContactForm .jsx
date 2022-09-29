// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contactsSlice';
import s from './ContactForm.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { getContacts } from '../../redux/contacts/selectors';

// { callback }
export const ContactForm = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

  const availableContact = name => {
    return contacts.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
  };

  // const addContact = newContact => {
  //   console.log(newContact);
  //   if (availableContact(newContact.name)) {
  //     return Notify.failure('This contact already exists');
  //   }
  //   // dispatch(addContact(newContact));

  //   // setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
  // };

  const onFormSubmit = evt => {
    evt.preventDefault();
    // console.log(dispatch(addContact({ name, number })));
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');

    // const form = evt.target;
    // const { name, number } = form.elements;
    // console.log(form.elements);

    // callback({ name, number });
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

// ContactForm.propTypes = {
//   callback: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   onSubmit: PropTypes.func,
//   onChange: PropTypes.func,
// };
