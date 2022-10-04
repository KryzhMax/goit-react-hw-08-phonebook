import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  // const token = useSelector(selectToken);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* {token && ( */}
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {/* )} */}
      </ul>
    </nav>
  );
};
