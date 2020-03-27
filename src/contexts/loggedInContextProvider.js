import React, { useState, createContext } from 'react';

export const LoggedInContext = createContext();

const LoggedInContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  return (
    <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
