import { useState } from 'react';
import { SignUpForm } from 'components/signUpForm/SignUpForm';
import s from './Navigation.module.css';
import { LoginForm } from 'components/loginForm/LoginForm';

import { NavLink } from 'react-router-dom';
import ModalWindow from 'components/modal/Modal';

export const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

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
          </NavLink>
        </li>
        <li>
          <NavLink className={s.navLink} to="/login">
            <ModalWindow title="Log In" children={<LoginForm />} />
          </NavLink>
        </li>
      </ul>
    </>
  );
};
