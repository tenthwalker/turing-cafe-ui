import './Form.css';
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  return (
    <form>
      <input />
      <input />
      <input />
      <input />
      <button>Make Reservation</button>
    </form>
  )
}

export default Form;