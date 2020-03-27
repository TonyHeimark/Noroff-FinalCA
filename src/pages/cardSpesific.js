import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Layout from '../containers/layout';

const CardSpesificPage = () => {
  const [card, setCard] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [directTo, setDirectTo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || false;
    if (isLoggedIn) {
    } else if (!isLoggedIn && users) {
      setDirectTo(<Redirect push to="/sign-in" />);
    } else {
      setDirectTo(<Redirect push to="/sign-up" />);
    }

    let cardId = null;
    if (window) {
      cardId = window.location.hash.substring(1);
    }

    if (cardId === '') {
      setDirectTo(<Redirect push to="/" />);
    }
    setIsLoading(true);

    fetch('https://api.magicthegathering.io/v1/cards/' + cardId)
      .then(response => {
        return response.json();
      })
      .then(res => {
        setIsLoading(false);
        setCard(res.card);
      });
  }, []);

  return (
    <Layout>
      {directTo}
      <div className="card-spesific">
        {isLoading && (
          <div className="home-page__loader">
            <PacmanLoader size={50} color={'black'} loading={isLoading} />
          </div>
        )}
        {card && (
          <img
            className="card-spesific__image"
            src={card.imageUrl}
            alt={card.name}
          />
        )}
        {card && (
          <div className="card-spesific__info">
            <h2 className="card-spesific__title">{card && card.name}</h2>
            <p className="card-spesific__text">{card.text}</p>
            <span className="card-spesific__rarity">Rarity: {card.rarity}</span>
            <span className="card-spesific__colors">Color: {card.colors}</span>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CardSpesificPage;
