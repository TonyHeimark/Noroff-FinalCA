import React, { useEffect, useState, useContext } from 'react';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';

const Layout = props => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [directToLogin, setDirectToLogin] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = () => {
    setDirectToLogin(<Redirect push to="/sign-in" />);
  };

  return (
    <>
      {directToLogin}
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogOut={handleLogOut}
      />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
