import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactsOperation';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name + '  :  ' + contact.number}
            <button
              onClick={() => dispatch(removeContacts(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
