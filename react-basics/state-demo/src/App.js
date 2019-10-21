import React, {Component} from 'react';
import Game from './Game';
import Clicked from './Click';
import Rando from './Rando';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clicked />
        <Clicked />
      </div>
    )
  }
}

export default App;
