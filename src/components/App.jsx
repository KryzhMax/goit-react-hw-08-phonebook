import { Section } from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';
import { Navigation } from './navigation/Navigation';

export const App = () => {
  return (
    <>
      <header>
        {/* <UserMenu /> */}
        <Navigation />
      </header>
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
        </Section>
      </div>
    </>
  );
};
