import { useState, useEffect } from 'react';
import { SignUpForm } from 'components/signUpForm/SignUpForm';
import s from './Navigation.module.css';
import { LoginForm } from 'components/loginForm/LoginForm';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [isRegFormShown, setIsRegFormShown] = useState(false);
  const [isLogFormShown, setIsLogFormShown] = useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const showRegForm = () => {
    setIsRegFormShown(true);
  };

  const showLogForm = () => {
    setIsLogFormShown(true);
  };

  return (
    <>
      <ul className={s.NavList}>
        <li>
          <NavLink to="/register" /*onClick={showRegForm}*/>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" /*onClick={showLogForm}*/>Log In</NavLink>
        </li>
      </ul>

      {isRegFormShown && <SignUpForm /*callback={closeForm}*/ />}
      {isLogFormShown && <LoginForm /*callback={closeForm}*/ />}
      {/* {isLoggedIn && <UserMenu />} */}
    </>
  );
};
