import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dice: Array.from({length: 5}).map(() => ({locked: false, value: 0, id: uuid()})),
            rolls: 3
         }
         this.rollDice = this.rollDice.bind(this);
         this.toggleLock = this.toggleLock.bind(this);
    }

    rollDice() {
        this.setState(st => ({ 
            dice: st.dice.map(item => (item.locked === false ? { ...item, value: Math.floor(Math.random() * 6) +1 } : item))
        }))
    }

    toggleLock(id) {
        this.setState(st => ({
            dice: st.dice.map(item => (item.id === id ? {...item, locked: !item.locked} : item))
        }))
    }

    render() { 
        const {dice} = this.state;
        const diceList = dice.map((item) => (
            <Die key={item.id} value={item.value} id={item.id} lockDie={this.toggleLock} />
        ))
        return (
            <div className="Game">
                {diceList}
                <button onClick={this.rollDice}>Roll!</button>
            </div>
        );
    }
}
 
export default Game;