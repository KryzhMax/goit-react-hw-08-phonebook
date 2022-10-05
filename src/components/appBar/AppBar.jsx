import Menu from 'components/menu/Menu';
import ModalWindow from 'components/modal/Modal';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { selectToken } from 'redux/auth/authSelectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const token = useSelector(selectToken);

  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.wrapper}>
      <UserMenu />
      {!token && <Navigation />}
      {token && <Menu />}
      {/* {isLoggedIn ? <Menu /> : <Navigation />} */}
    </header>
  );
};

export default AppBar;
