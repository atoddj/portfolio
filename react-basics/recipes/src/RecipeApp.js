import React from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import './RecipeApp.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default App;
