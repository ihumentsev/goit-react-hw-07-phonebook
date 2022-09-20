import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <>
      <h3>Find contacts name</h3>
      <input
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={event => onChangeFilter(event.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
