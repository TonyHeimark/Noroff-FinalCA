import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home.js';
import SignInPage from '../pages/signin.js';
import AboutPage from '../pages/about.js';
import ContactPage from '../pages/contact.js';
import SignUpPage from '../pages/signup.js';
import CardSpesificPage from '../pages/cardSpesific.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/card" component={CardSpesificPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
