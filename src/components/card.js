import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h3 className="card__title">{card.name}</h3>
      <img className="card__image" alt={card.name} src={card.imageUrl} />
      <a className="card__link" href={'/card/id#' + card.id}>
        See more
      </a>
    </div>
  );
};

export default Card;
