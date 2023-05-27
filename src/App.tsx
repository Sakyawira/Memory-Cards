import React, { useState } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Shuffler } from './features/shuffler/Shuffler';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Shuffler />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
