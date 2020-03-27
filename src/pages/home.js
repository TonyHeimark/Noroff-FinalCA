import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoggedInContext } from '../contexts/loggedInContextProvider';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Card from '../components/card';
import Layout from '../containers/layout';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [directToLogin, setDirectToLogin] = useState(null);
  const [allCards, setAllCards] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState(null);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = e => {
    const filteredCards = allCards.filter(card => {
      return card.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCardsToDisplay(filteredCards);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || false;
    if (isLoggedIn) {
    } else if (!isLoggedIn && users) {
      setDirectToLogin(<Redirect push to="/sign-in" />);
    } else {
      setDirectToLogin(<Redirect push to="/sign-up" />);
    }
    setIsLoading(true);
    fetch('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        return response.json();
      })
      .then(res => {
        const removeDups = array =>
          array.filter((card, i) => {
            if (i >= 1) {
              const prevCard = i - 1;
              return card.name !== array[prevCard].name;
            }
          });
        const uniqueCards = removeDups(res.cards);
        setIsLoading(false);
        setAllCards(uniqueCards);
        setCardsToDisplay(uniqueCards);
      });
  }, []);

  return (
    <Layout>
      {directToLogin}
      <div className="home-page">
        <div className="home-page__search">
          <label
            className={`home-page__label ${
              search || searchText.length > 0 ? 'home-page__label--active' : ''
            }`}
            for="search"
          >
            Search
          </label>
          <input
            className={`home-page__input ${
              search || searchText.length > 0 ? 'home-page__input--active' : ''
            }`}
            type="text"
            name="search"
            id="search"
            autocomplete="off"
            onBlur={() => {
              setSearch(false);
            }}
            onFocus={() => {
              setSearch(true);
            }}
            onChange={e => {
              handleSearch(e);
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="home-page__cards">
          {isLoading && (
            <div className="home-page__loader">
              <PacmanLoader size={50} color={'black'} loading={isLoading} />
            </div>
          )}
          {cardsToDisplay &&
            cardsToDisplay.map(card => <Card key={card.id} card={card} />)}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
