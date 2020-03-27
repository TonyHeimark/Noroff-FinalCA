import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import SignInForm from '../components/signInForm';

import gamepad from '../assets/gamepad-solid.svg';

const SignInPage = () => {
  const [directToHomePage, setDirectToHomePage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [authenticated, setAuthenticated] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (
      users.some(user => {
        return user.username === userName && user.password === password;
      })
    ) {
      setAuthenticated(true);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
      setDirectToHomePage(<Redirect push to="/" />);
    } else {
      setAuthenticated(false);
      setUserName('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setDirectToHomePage(<Redirect push to="/" />);
    }
  }, []);

  return (
    <div className="sign-in">
      {directToHomePage}
      <div className="sign-in__wrapper">
        <img className="sign-in__brand-img" src={gamepad} />
        <SignInForm
          password={password}
          userName={userName}
          setUserName={setUserName}
          setPassword={setPassword}
          handleSignIn={handleSignIn}
          authenticated={authenticated}
        />
      </div>
    </div>
  );
};

export default SignInPage;
