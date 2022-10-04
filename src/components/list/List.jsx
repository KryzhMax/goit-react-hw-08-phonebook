import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getLoading,
  getError,
} from '../../redux/contacts/selectors';
import { filterContact } from 'redux/filter/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';
import {
  deleteContact,
  fetchContacts,
} from '../../redux//contacts/contactsOperations';
import Spinner from '../Spinner/Spinner';
import s from './List.module.css';
import { selectToken } from 'redux/auth/authSelectors';

export const Filter = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onFinder = e => {
    dispatch(filterContact(e.target.value));
  };

  const deleteName = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h3>Find contact by name</h3>
      <form className={s.finder}>
        <input type="text" onChange={onFinder} />
      </form>
      {isLoading && !error && <Spinner />}
      {token && (
        <ul className={s.list}>
          {filteredContacts().length
            ? filteredContacts().map(({ id, name, number }) => {
                return (
                  <li key={id} className={s.listItem}>
                    {name}: {number}
                    <button
                      className={s.delBtn}
                      type="button"
                      onClick={() => deleteName(id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })
            : ''}
        </ul>
      )}
    </>
  );
};
