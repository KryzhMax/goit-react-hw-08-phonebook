import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';

const Menu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome {name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Menu;
