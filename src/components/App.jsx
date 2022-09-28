import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { filterContact } from '../redux/filter/filterSlice';
import { addContact, delContact } from '../redux/contacts/contactsSlice';

import Section from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';
import { nanoid } from 'nanoid';

export const App = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const availableContact = name => {
    return contacts.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
  };

  const addContact = newContact => {
    if (availableContact(newContact.name)) {
      return Notify.failure('This contact already exists');
    }
    // setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
    dispatch(addContact(newContact));
  };

  const onDelete = id => {
    // setContacts(prev => prev.filter(item => item.id !== id));
    dispatch(delContact(id));
  };

  const onFilter = value => {
    dispatch(filterContact(value.trim()));

    // setFilter(value.trim());
  };

  const filteredContacts = () => {
    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm callback={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter
          onHandleFilter={onFilter}
          contacts={filteredContacts()}
          onDeleteHandler={onDelete}
        />
      </Section>
    </div>
  );
};
