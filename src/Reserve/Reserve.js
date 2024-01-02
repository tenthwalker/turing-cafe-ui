import { useState } from 'react';
import Card from '../Card/Card.js';
import '../Reserve/Reserve.css';

function Reserve({ cards }) {
  const reserveCards = cards.map(card => {
    return (
      <Card
        id={card.id}
        name={card.name}
        date={card.date}
        time={card.time}
        number={card.number}
        key={card.id}
      />
    )
  })

  return (
    <div>
      {reserveCards}
    </div>
  )
}

export default Reserve;