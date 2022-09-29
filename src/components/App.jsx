// import { useState, useEffect } from 'react';
import Section from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
