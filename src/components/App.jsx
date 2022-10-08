import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import shortid from 'shortid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from '../components/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContacts } from 'redux/contactsOperation';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
      dispatch(addContacts(contact));
    }
  };

  return (
    <div className={css.conteiner}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
