import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import SignUpForm from '../components/signUpForm';

import gamepad from '../assets/gamepad-solid.svg';

const SignUpPage = () => {
  const [directTo, setDirectTo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (
      userName.length >= 3 &&
      password.length >= 6 &&
      password === confirmPassword
    ) {
      const usersLogin = {
        users: [
          {
            username: userName,
            password
          }
        ]
      };
      localStorage.setItem('users', JSON.stringify(usersLogin.users));
      setDirectTo(<Redirect push to="/sign-in" />);
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setDirectTo(<Redirect push to="/" />);
    }
  }, []);

  return (
    <div className="sign-up">
      {directTo}
      <div className="sign-up__wrapper">
        <img className="sign-up__brand-img" src={gamepad} />
        <SignUpForm
          handleSignUp={handleSignUp}
          setConfirmPassword={setConfirmPassword}
          setPassword={setPassword}
          setUserName={setUserName}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
