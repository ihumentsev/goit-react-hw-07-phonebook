import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/contactsSlice';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            {contact.name + '  :  ' + contact.number}
            <button onClick={() => dispatch(remove(contact.id))} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
