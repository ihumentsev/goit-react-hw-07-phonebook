import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../components/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/contactsSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const addContact = event => {
    const searchSameName = contacts.map(cont => cont.name).includes(event.name);

    if (searchSameName) {
      alert(`${event.name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        name: event.name,
        number: event.number,
      };
      dispatch(add(contact));
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

  const visibleContacts = getVisibleContacts();
  return (
    <div className={css.conteiner}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
