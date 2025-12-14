import React from 'react';
import Weather from './Weather';
import ClothingCategories from './ClothingCategories';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Update</h1>
      </header>
      <main>
        <Weather />
        <ClothingCategories />
      </main>
    </div>
  );
}

export default App;
