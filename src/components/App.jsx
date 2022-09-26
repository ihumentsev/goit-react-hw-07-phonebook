import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../components/App.module.css';

export default function App() {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const addContact = event => {
    console.log(event);
    const searchSameName = contacts.map(cont => cont.name).includes(event.name);

    if (searchSameName) {
      alert(`${event.name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        name: event.name,
        number: event.number,
      };

      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();
  return (
    <div className={css.conteiner}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={visibleContacts} onRemoveContact={removeContact} />
    </div>
  );
}
