import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import './Game.css';

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
            dice: st.dice.map(item => (item.locked === false ? { ...item, value: Math.floor(Math.random() * 6) +1 } : item)),
            rolls: st.rolls - 1
        }))
    }

    toggleLock(id) {
        this.setState(st => ({
            dice: st.dice.map(item => (item.id === id ? {...item, locked: !item.locked} : item))
        }))
    }

    render() { 
        const {dice,rolls} = this.state;
        const diceList = dice.map((item) => (
            <Die key={item.id} value={item.value} id={item.id} lockDie={this.toggleLock} />
        ))
        return (
            <div className="Game">
                <div className="Game-dice">
                    {diceList}
                </div>
                <button onClick={this.rollDice} disabled={rolls === 0}>{rolls} Rolls left!</button>
            </div>
        );
    }
}
 
export default Game;