import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
