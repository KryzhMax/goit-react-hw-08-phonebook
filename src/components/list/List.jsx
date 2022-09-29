import React from 'react';
// import PropTypes from 'prop-types';
import s from './List.module.css';
import { getContacts } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../../redux/contacts/contactsSlice';
import { filterContact } from 'redux/filter/filterSlice';

// { contacts, onHandleFilter, onDeleteHandler }
export const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  console.log(contacts.contacts);

  const onFinder = e => {
    // onHandleFilter(e.target.value);
    dispatch(filterContact(e.target.value));
  };

  const deleteName = id => {
    // onDeleteHandler(id);
    dispatch(delContact(id));
  };

  return (
    <>
      <h3>Find contact by name</h3>
      <form className={s.finder}>
        <input type="text" onChange={onFinder} />
      </form>
      <ul className={s.list}>
        {contacts.contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.listItem}>
              {name}: {number}
              <button
                className={s.delBtn}
                type="button"
                onClick={deleteName(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// Filter.propTypes = {
//   onHandleFilter: PropTypes.func.isRequired,
//   onDeleteHandler: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };
