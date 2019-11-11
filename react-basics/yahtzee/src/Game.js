import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dice: Array.from({length: 5}).map(() => ({locked: false, value: 0, id: uuid()})),
            rolls: 3,
            scores: [
                {name: 'Aces', type: 'upper', score: 0},
                {name: 'Twos', type: 'upper', score: 0},
                {name: 'Threes', type: 'upper', score: 0},
                {name: 'Fours', type: 'upper', score: 0},
                {name: 'Fives', type: 'upper', score: 0},
                {name: 'Sixes', type: 'upper', score: 0},
                {name: '3 of a kind', type: 'lower', score: 0},
                {name: '4 of a kind', type: 'lower', score: 0},
                {name: 'Full house', type: 'lower', score: 0},
                {name: 'Small straight', type: 'lower', score: 0},
                {name: 'Large straight', type: 'lower', score: 0},
                {name: 'Yahtzee', type: 'lower', score: 0},
                {name: 'Chance', type: 'lower', score: 0}
            ]
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
        const {dice,rolls,scores} = this.state;
        const diceList = dice.map((item) => (
            <Die key={item.id} value={item.value} id={item.id} lockDie={this.toggleLock} />
        ));
        const upperScores = scores.filter(item => (item.type=== 'upper')).map(item => (
            <li>{item.name}</li>
        ));
        const lowerScores = scores.filter(item => (item.type=== 'lower')).map(item => (
            <li>{item.name}</li>
        ));
        console.log(upperScores);
        return (
            <div className="Game">
                <div className="Game-dice">
                    {diceList}
                </div>
                <button onClick={this.rollDice} disabled={rolls === 0}>{rolls} Rolls left!</button>
                <div className="Game-scores">
                    <h2>Upper Section</h2>
                    {upperScores}
                    <h2>Lower Section</h2>
                    {lowerScores}
                </div>
            </div>
        );
    }
}
 
export default Game;