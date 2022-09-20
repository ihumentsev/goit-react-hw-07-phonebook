import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export default function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name + '  :  ' + contact.number}
            <button onClick={() => onRemoveContact(contact.id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
