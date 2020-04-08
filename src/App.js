import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import FinancesList from './js/app/views/FinancesList'
import FinanceForm from './js/app/views/FinanceForm';

export default () => {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Finances</h1>
        <FinanceForm />
        <FinancesList />
        <p>
          you clicked {count} times
        </p>
        <button onClick={() => setCount(count + 1)}>
          click
        </button>
      </header>
    </div>
  );
}