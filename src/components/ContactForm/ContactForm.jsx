import { useState } from 'react';
import shortid from 'shortid';
import css from '../ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsOperation';

export default function ContactForm() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const addName = contacts.map(el => el.name).includes(name);
    if (addName) {
      alert(`${event.name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      console.log(contact);
      dispatch(addContacts(contact));
    }
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">add contact</button>
      </form>
    </>
  );
}
