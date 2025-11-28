import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Update</h1>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  );
}

export default App;
