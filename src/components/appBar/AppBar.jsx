import Menu from 'components/menu/Menu';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header className={s.wrapper}>
      <UserMenu />
      {!token && <Navigation />}
      {token && <Menu />}
    </header>
  );
};

export default AppBar;
