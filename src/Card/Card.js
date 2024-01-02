import './Card.css';
import React, { useState } from 'react';

function Card({ name, date, time, number }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;