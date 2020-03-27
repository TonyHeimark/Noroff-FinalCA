import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import Layout from '../containers/layout';
import ContactForm from '../components/contactForm';

const ContactPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [directToLogin, setDirectToLogin] = useState(null);
  const [errorState, setErrorState] = useState({});

  const [activeField, setActiveField] = useState(null);

  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: null,
    message: ''
  });

  const handleState = e => {
    const field = e.target.name;
    const value = e.target.value;
    setFormFields({ ...formFields, [field]: value });
  };

  const handleSubmit = e => {
    let errors = {};
    const emailVal = RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');
    const phoneVal = RegExp('^[0-9]{3}[. -][0-9]{3}[. -][0-9]{4}$');

    if (formFields.firstName === '') {
      errors = { ...errors, firstName: 'You need to fill out this field' };
    }
    if (formFields.lastName === '') {
      errors = { ...errors, lastName: 'You need to fill out this field' };
    }
    if (!emailVal.test(formFields.email) || formFields.email === '') {
      errors = { ...errors, email: 'Please put in a valid email' };
    }
    if (!phoneVal.test(formFields.phone) || formFields.phone === null) {
      errors = { ...errors, phone: 'Please put in a valid phone number' };
    }
    if (formFields.message === '') {
      errors = { ...errors, message: 'You need to fill out this field' };
    }

    const errorCheck = Object.keys(errors);
    if (errorCheck.length !== 0) {
      e.preventDefault();
      setErrorState(errors);
    }
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || false;
    if (isLoggedIn) {
    } else if (!isLoggedIn && users) {
      setDirectToLogin(<Redirect push to="/sign-in" />);
    } else {
      setDirectToLogin(<Redirect push to="/sign-up" />);
    }
  }, []);

  return (
    <Layout>
      {directToLogin}
      <div className="contact">
        <div className="contact__wrapper">
          <h2>Contact</h2>
          <div className="contact__form-wrapper">
            <ContactForm
              handleState={handleState}
              handleSubmit={handleSubmit}
              errorState={errorState}
              formFields={formFields}
              activeField={activeField}
              setActiveField={setActiveField}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
