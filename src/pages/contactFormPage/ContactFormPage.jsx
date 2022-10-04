// import { Outlet } from 'react-router';
import { ContactForm } from 'components/form/ContactForm ';
import { Filter } from 'components/list/List';
import { Section } from 'components/section/Section';

const ContactFormPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
    </>
  );
};

export default ContactFormPage;
