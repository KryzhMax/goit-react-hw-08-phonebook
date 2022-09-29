import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from '../redux/filter/filterSlice';
// import { addContact, delContact } from '../redux/contacts/contactsSlice';

import Section from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';
// import { nanoid } from 'nanoid';

export const App = () => {
  // const dispatch = useDispatch();
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const addContact = newContact => {
  //   console.log(newContact);
  //   if (availableContact(newContact.name)) {
  //     return Notify.failure('This contact already exists');
  //   }
  //   dispatch(addContact(newContact));

  //   // setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
  // };

  // const onDelete = id => {
  //   dispatch(delContact(id));

  //   // setContacts(prev => prev.filter(item => item.id !== id));
  // };

  // const onFilter = value => {
  //   dispatch(filterContact(value.trim()));

  //   // setFilter(value.trim());
  // };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter
        // onHandleFilter={onFilter}
        // contacts={filteredContacts()}
        // onDeleteHandler={onDelete}
        />
      </Section>
    </div>
  );
};
