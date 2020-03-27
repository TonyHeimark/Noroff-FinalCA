import React, { useState } from 'react';

import gamepad from '../assets/gamepad-solid.svg';
import hamburger from '../assets/bars-solid.svg';

const Header = ({
  isLoggedIn,
  setIsLoggedIn,
  handleLogOut,
  setShowMenu,
  showMenu
}) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__brand">
          <a className="header__brand-link" href="/">
            <img className="header__brand-img" src={gamepad} />
            <h1 className="header__brand-name">Card Game</h1>
          </a>
        </div>
        <nav
          className={`header__nav ${
            showMenu ? 'header__nav--show' : 'header__nav--close'
          }`}
        >
          {showMenu && (
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="header__close-button"
            >
              X
            </button>
          )}
          <ul className="header__list">
            <li className="header__list-item">
              <a href="/">Home</a>
            </li>
            <li className="header__list-item">
              <a href="/about">About</a>
            </li>
            <li className="header__list-item">
              <a href="/contact">Contact</a>
            </li>

            {isLoggedIn ? (
              <li className="header__list-item">
                <button
                  className="header__log-out"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem('isLoggedIn');
                    handleLogOut();
                  }}
                >
                  Log out
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
        <button
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="header__hamburger"
        >
          <img src={hamburger} alt="mobile menu" />{' '}
        </button>
      </div>
    </header>
  );
};

export default Header;
