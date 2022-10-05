import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
import Button from 'react-bootstrap/Button';
import s from './Menu.module.css';

const Menu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.menu}>
      <p className={s.text}>Welcome, {name}!</p>
      <Button
        className={s.button}
        type="button"
        variant="secondary"
        onClick={() => dispatch(logout())}
      >
        <b>Logout</b>
      </Button>
    </div>
  );
};

export default Menu;
