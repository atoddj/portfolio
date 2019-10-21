import React, {Component} from 'react';
import Game from './Game';
import Clicked from './Click';
import Rando from './Rando';
import DisplayNumber from './DisplayNumber';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayNumber />
      </div>
    )
  }
}

export default App;
