// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact, delContact } from '../../redux/contacts/contactsSlice';
import s from './ContactForm.module.css';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const ContactForm = ({ callback }) => {
  const dispatch = useDispatch();
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const onFormChange = e => {
    const { name, value } = e.target;
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;

    //   default:
    //     break;
    // }

    // const { name, value } = e.target;
    // this.setState({ [name]: value });
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    console.log(form.elements);

    console.log(dispatch(addContact({ name, number })));
    setName();
    setNumber();
    // callback({ name, number });
    form.reset();
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

ContactForm.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
