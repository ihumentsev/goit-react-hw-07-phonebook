import { filter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const changeFilter = event => {
    dispatch(filter(event.target.value));
  };

  return (
    <>
      <h3>Find contacts name</h3>
      <input
        type="text"
        name="name"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
      />
    </>
  );
}
