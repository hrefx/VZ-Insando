import './Card.css';

function CardItem({name,rarity,energy,attack,imageURL}) {

  return (
    <div className='card-container'>
        <div className='image-container'>
          <img src={imageURL} alt={name}></img>
          <div className='card-content'>
            <div className='card-name'>
              Brawler: {name}
            </div>
            <div className='card-rarity'>
              Rarity: {rarity}
            </div>
            <div className='card-energy'>
              Energy: {energy}
            </div>
            <div className='card-attack'>
              Attack: {attack}
            </div>
          </div>
        </div>
    </div>
  );
}

export default CardItem;