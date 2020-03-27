import React from 'react';

const ContactForm = ({
  handleState,
  handleSubmit,
  errorState,
  formFields,
  setActiveField,
  activeField
}) => {
  return (
    <form onSubmit={handleSubmit} className="contact__form">
      {errorState.firstName && (
        <span className="contact__error">{errorState.firstName}</span>
      )}
      <label
        className={`contact__label ${
          formFields.firstName || activeField === 'firstName'
            ? 'contact__label--active'
            : ''
        }`}
        for="firstName"
      >
        First name *
      </label>
      <input
        onFocus={e => {
          setActiveField(e.target.name);
        }}
        onChange={handleState}
        className={`contact__input ${errorState.firstName &&
          'contact__input--error'}`}
        type="text"
        name="firstName"
        id="firstName"
      />
      {errorState.lastName && (
        <span className="contact__error">{errorState.lastName}</span>
      )}
      <label
        className={`contact__label ${
          formFields.lastName || activeField === 'lastName'
            ? 'contact__label--active'
            : ''
        }`}
        for="lastName"
      >
        Last name *
      </label>
      <input
        onFocus={e => {
          setActiveField(e.target.name);
        }}
        onChange={handleState}
        className={`contact__input ${errorState.lastName &&
          'contact__input--error'}`}
        type="text"
        name="lastName"
        id="lastName"
      />
      {errorState.email && (
        <span className="contact__error">{errorState.email}</span>
      )}
      <label
        className={`contact__label ${
          formFields.email || activeField === 'email'
            ? 'contact__label--active'
            : ''
        }`}
        for="email"
      >
        Email *
      </label>
      <input
        onFocus={e => {
          setActiveField(e.target.name);
        }}
        onChange={handleState}
        className={`contact__input ${errorState.email &&
          'contact__input--error'}`}
        type="text"
        name="email"
        id="email"
      />
      {errorState.phone && (
        <span className="contact__error">{errorState.phone}</span>
      )}
      <label
        className={`contact__label ${
          formFields.phone || activeField === 'phone'
            ? 'contact__label--active'
            : ''
        }`}
        for="phone"
      >
        Phone *
      </label>
      <input
        onFocus={e => {
          setActiveField(e.target.name);
        }}
        onChange={handleState}
        className={`contact__input ${errorState.phone &&
          'contact__input--error'}`}
        type="phone"
        name="phone"
        id="phone"
      />
      {errorState.message && (
        <span className="contact__error">{errorState.message}</span>
      )}
      <label
        className={`contact__textarea-label ${
          formFields.message || activeField === 'message'
            ? 'contact__textarea-label--active'
            : ''
        }`}
        for="message"
      >
        Message *
      </label>
      <textarea
        onFocus={e => {
          setActiveField(e.target.name);
        }}
        onChange={handleState}
        className={`contact__textarea ${errorState.message &&
          'contact__textarea--error'}`}
        name="message"
        id="message"
      />
      <button className="contact__button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
