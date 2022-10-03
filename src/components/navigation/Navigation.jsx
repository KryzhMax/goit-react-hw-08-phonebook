import { useState, useEffect } from 'react';
import { SignUpForm } from 'components/signUpForm/SignUpForm';
import s from './Navigation.module.css';
import { LoginForm } from 'components/loginForm/LoginForm';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

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
      <nav>
        <ul className={s.NavList}>
          <li>
            <button type="button" onClick={showRegForm}>
              Sign Up
            </button>
          </li>
          <li>
            <button type="button" onClick={showLogForm}>
              Log In
            </button>
          </li>
        </ul>
      </nav>
      {isRegFormShown && <SignUpForm /*callback={closeForm}*/ />}
      {isLogFormShown && <LoginForm /*callback={closeForm}*/ />}
      {/* {isLoggedIn && <UserMenu />} */}
    </>
  );
};
