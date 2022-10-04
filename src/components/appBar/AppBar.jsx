import Menu from 'components/menu/Menu';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const AppBar = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <UserMenu />
      <Menu />
      <Navigation />
      {/* {isLoggedIn ? <Menu /> : <Navigation />} */}
    </>
  );
};

export default AppBar;
