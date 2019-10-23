import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery 
        title="Daily lotto"
        numBalls={4}
        maxNum={10}
      />
    </div>
  );
}

export default App;
