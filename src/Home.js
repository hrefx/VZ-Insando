import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './Firebase-config';
import { useEffect } from 'react';
import CardItem from './CardItem';
import CardList from './CardList';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let newList = [];
    const querySnapshot = await getDocs(collection(db, 'cards-react'));
    querySnapshot.forEach((doc) => {
      newList.push({
        name: doc.data().name,
        rarity: doc.data().rarity,
        attack: doc.data().attack,
        energy: doc.data().energy,
        imageURL: doc.data().imageURL,
      });
      console.log(doc.id, ' => ', doc.data());
    });
    setList(newList);
  };

  const removeCard = (removedCard) => {
    const updatedList = list.filter((card) => card.name !== removedCard.name);
    setList(updatedList);
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="div">
        {list.map((item, index) => (
          <CardItem
            key={index}
            name={item.name}
            rarity={item.rarity}
            energy={item.energy}
            attack={item.attack}
            imageURL={item.imageURL}
          />
        ))}
        

      </div>
        <div>
            <br></br>
            <h2>Selected Cards:</h2>
        </div>
        <div className="div">
        {list.map((item) => (
            <CardList
            onAddCard={removeCard}
            name={item.name}
            rarity={item.rarity}
            energy={item.energy}
            attack={item.attack}
            imageURL={item.imageURL} />
            ))}
        </div>
    </div>
  );
}

export default Home;
