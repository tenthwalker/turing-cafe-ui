import './Form.css';
import { useState } from 'react';

function Form({ addReserve }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  function submitReserve(event) {
    event.preventDefault()
    const newCard = {
      id: Date.now(),
      name,
      date,
      time,
      number
    }
    addReserve(newCard)
  }

  return (
    <form>
      <input 
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input 
        type='text'
        placeholder='Date (mm/dd)'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <input 
        type='text'
        placeholder='Time'
        name='time'
        value={time}
        onChange={event => setTime(event.target.value)}
      />
      <input 
        type='text'
        placeholder='Number of guests'
        name='number'
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button>Make Reservation</button>
    </form>
  )
}

export default Form;