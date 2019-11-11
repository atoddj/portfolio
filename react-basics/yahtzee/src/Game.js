import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Die from './Die';
import Row from './Row';
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dice: Array.from({length: 5}).map(() => ({locked: false, value: 0, id: uuid()})),
            rolls: 3,
            scores: [
                {name: 'Aces', value: 1, type: 'upper', score: 0, counted: false},
                {name: 'Twos', value: 2, type: 'upper', score: 0, counted: false},
                {name: 'Threes', value: 3, type: 'upper', score: 0, counted: false},
                {name: 'Fours', value: 4, type: 'upper', score: 0, counted: false},
                {name: 'Fives', value: 5, type: 'upper', score: 0, counted: false},
                {name: 'Sixes', value: 6, type: 'upper', score: 0, counted: false},
                {name: '3 of a kind', type: 'lower', score: 0, scoreFn: this.score3ofK},
                {name: '4 of a kind', type: 'lower', score: 0, scoreFn: this.score4ofK},
                {name: 'Full house', type: 'lower', score: 0, scoreFn: this.scoreFullHouse},
                {name: 'Small straight', type: 'lower', score: 0, scoreFn: this.scoreSStraight},
                {name: 'Large straight', type: 'lower', score: 0, scoreFn: this.scoreLStraight},
                {name: 'Yahtzee', type: 'lower', score: 0, scoreFn: this.scoreYahtzee},
                {name: 'Chance', type: 'lower', score: 0, scoreFn: this.scoreChance}
            ]
         }
         this.rollDice = this.rollDice.bind(this);
         this.toggleLock = this.toggleLock.bind(this);
         this.scoreUpper = this.scoreUpper.bind(this);
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

    scoreUpper(val) {
        const {dice} = this.state;
        var score = 0;
        dice.forEach(item => {
            if (item.value === val) {
                score += item.value;
            }
        })
        this.setState(st => ({
            scores: st.scores.map(item => ((item.value === val && !item.counted) ? {...item, score: score, counted: true}: item)),
            rolls: 3,
            dice: st.dice.map(item => ({...item, locked: false}))
        }))
    }

    render() { 
        const {dice,rolls,scores} = this.state;
        const diceList = dice.map((item) => (
            <Die key={item.id} value={item.value} id={item.id} lockDie={this.toggleLock} frozen={item.locked} />
        ));
        const upperScores = scores.filter(item => (item.type=== 'upper')).map(item => (
            <Row
                name={item.name}
                score={item.score}
                scoreFn={this.scoreUpper}
                value={item.value}
            />
        ));
        const lowerScores = scores.filter(item => (item.type=== 'lower')).map(item => (
            <Row
                name={item.name}
                score={item.score}
            />
        ));
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