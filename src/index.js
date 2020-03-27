import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AppRouter from './routes/appRouter';
import LoggedInContextProvider from './contexts/loggedInContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoggedInContextProvider>
      <AppRouter />
    </LoggedInContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
