import './App.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.js';
import Form from '../Form/Form.js'
import Reserve from '../Reserve/Reserve.js';

function App() {
  const [cards, setCards] = useState([])
  const url = 'http://localhost:3001/api/v1/reservations';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error))
  }, []);

  function addReserve(newReserve) {
    setCards([...cards, newReserve])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Form addReserve={addReserve}/>
        <Reserve cards={cards}/>
      </div>
    </div>
  );
}

export default App; 