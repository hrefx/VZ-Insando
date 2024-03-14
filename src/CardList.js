import React, { useState } from 'react';
import CardItem from './CardItem';
import './Card.css';

function CardList({name,rarity,energy,attack,imageURL, onAddCard}) {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      name: name,
      rarity: rarity,
      energy: energy,
      attack: attack,
      imageURL: imageURL
    };
    setCards([...cards, newCard]);
    onAddCard(newCard);
  };

  return (
    <div>
      <button onClick={addCard}>Add Card</button>
      <div className="card-list" >
        {cards.map((card, index) => (
          <CardItem
            key={index}
            name={card.name}
            rarity={card.rarity}
            energy={card.energy}
            attack={card.attack}
            imageURL={card.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
