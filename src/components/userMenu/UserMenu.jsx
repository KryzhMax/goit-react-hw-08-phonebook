// import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const token = useSelector(selectToken);

  return (
    <nav className={s.nav}>
      <ul className={s.userMenuList}>
        <li className={s.userMenuItem}>
          <NavLink className={s.navLink} to="/">
            Home
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink className={s.navLink} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
