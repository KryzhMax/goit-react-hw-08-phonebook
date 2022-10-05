import { useState, useEffect } from 'react';
import { SignUpForm } from 'components/signUpForm/SignUpForm';
import s from './Navigation.module.css';
import { LoginForm } from 'components/loginForm/LoginForm';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import ModalWindow from 'components/modal/Modal';
import Button from 'react-bootstrap/Button';

export const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const [isRegFormShown, setIsRegFormShown] = useState(false);
  // const [isLogFormShown, setIsLogFormShown] = useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // const showRegForm = () => {
  //   setIsRegFormShown(true);
  // };

  // const showLogForm = () => {
  //   setIsLogFormShown(true);
  // };

  return (
    <>
      <ul className={s.navList}>
        <li>
          <NavLink
            className={s.navLink}
            to="/register"
            onClick={() => handleShow()}
          >
            <ModalWindow title="Sign Up" children={<SignUpForm />} />
            {/* Sign Up */}
          </NavLink>
        </li>
        <li>
          <NavLink className={s.navLink} to="/login" /*onClick={showLogForm}*/>
            {/* Log In */}
            <ModalWindow title="Log In" children={<LoginForm />} />
          </NavLink>
        </li>
      </ul>

      {/* {isLoggedIn && <UserMenu />} */}
    </>
  );
};
