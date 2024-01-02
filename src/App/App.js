import './App.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.js';

function App() {

  const url = 'http://localhost:3001/api/v1/reservations';


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Card />
      </div>
    </div>
  );
}

export default App; 