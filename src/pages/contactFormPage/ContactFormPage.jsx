// import { Outlet } from 'react-router';
import { ContactForm } from 'components/form/ContactForm ';
import { Filter } from 'components/list/List';
import { Section } from 'components/section/Section';
import s from './ContactFormPage.module.css';

const ContactFormPage = () => {
  return (
    <main>
      <div className={s.wrapper}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
        </Section>
      </div>
    </main>
  );
};

export default ContactFormPage;
