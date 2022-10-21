import { useState, useEffect } from 'react';
import { MyContactForm } from './Form';
import { Section } from './Section';
import { ListOfContacts } from './ListOfContacts';
import { Filter } from './Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const hanlerSubmitForm = contact => {
    const a = contacts.find(
      item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );
    if (!a) {
      setContacts([...contacts, contact]);
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = e => {
    let filteredArray = contacts.filter(
      item => item.id !== e.target.value
    );
    setContacts([...filteredArray])
  };

  const normalFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <MyContactForm onSubmit={hanlerSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterContacts} />
        <ListOfContacts
          contacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
