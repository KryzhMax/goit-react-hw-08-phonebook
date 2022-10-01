import { useDispatch, useSelector } from 'react-redux';
import Section from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';

import { fetchContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
    </div>
  );
};
