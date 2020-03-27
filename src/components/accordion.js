import React from 'react';

import chevronDown from '../assets/chevron-down-solid.svg';
import chevronRight from '../assets/chevron-right-solid.svg';

const Accordion = ({ handleAccordion, isOpen }) => {
  return (
    <div className="accordion">
      <div onClick={handleAccordion} className="accordion__handler">
        <h2>Defeat your opponent</h2>
        <img src={isOpen ? chevronDown : chevronRight} alt="Accordion" />
      </div>
      <div
        className={`accordion__drawer ${
          isOpen ? 'accordion__drawer--open' : ''
        }`}
      >
        <p>
          Each player starts the game with 20 life. Knock your opponent down to
          0 life, and you win. The most common way to do this is to summon
          creatures and attack with them.
        </p>
        <p>
          Creature cards are the most important part of many Magic decks.
          They’re really easy to spot—just look at the lower right of a card. If
          you see a pair of numbers separated by a slash, you’ve got a creature
          card. Once it’s on the battlefield, a creature continues to attack and
          defend for you until your opponent can find a way to take it out.
        </p>
        <p>
          Most games become a race to see who can deal the most damage first.
          Summoning the best creatures will help you win that race every time.
          Check out the section on casting creature spells.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
