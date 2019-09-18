import React from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './RecipeApp.css';

function App() {
  return (
    <div className="App">
      <Recipe title="pasta" 
      ingredients={['flour', 'egg', 'water']}
      directions="Mix ingredients"
      img="img/spaghetti.jpg"
      />
    </div>
  );
}

export default App;
