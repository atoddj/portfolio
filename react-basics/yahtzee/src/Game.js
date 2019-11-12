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
                {name: '3 of a kind', value: 3, type: 'lower', score: 0, counted: false, scoreFn: 'scoreXofKind'},
                {name: '4 of a kind', value: 4, type: 'lower', score: 0, counted: false,  scoreFn: 'scoreXofKind'},
                {name: 'Full house', value: 25, type: 'lower', score: 0, counted: false, scoreFn: 'scoreFullHouse'},
                {name: 'Small straight', value: 4, type: 'lower', counted: false, score: 0, scoreFn: 'scoreStraight'},
                {name: 'Large straight', value: 5, type: 'lower', counted: false, score: 0, scoreFn: 'scoreStraight'},
                {name: 'Yahtzee', value: 5, type: 'lower', score: 0, counted: false, scoreFn: 'scoreXofKind'},
                {name: 'Chance', value: null, type: 'lower', score: 0, counted: false, scoreFn: 'scoreChance'}
            ]
         }
         this.rollDice = this.rollDice.bind(this);
         this.toggleLock = this.toggleLock.bind(this);
         this.scoreUpper = this.scoreUpper.bind(this);
         this.scoreXofKind = this.scoreXofKind.bind(this);
         this.scoreFullHouse = this.scoreFullHouse.bind(this);
         this.scoreStraight = this.scoreStraight.bind(this);
         this.scoreChance = this.scoreChance.bind(this);
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

    scoreUpper(val, name) {
        const {dice} = this.state;
        var score = 0;
        dice.forEach(item => {
            if (item.value === val) {
                score += item.value;
            }
        })
        this.updateScore(name, score);
    }

    scoreXofKind(numOfDice, name) {
        const test = (Object.values(this.getFaceCounts()).filter(item => item >= numOfDice)) > 0;
        if(test && numOfDice >= 5) {
            this.updateScore(name, 50)
        } else if (test) {
            this.updateScore(name, this.sumOfDice())
        } else {
            this.updateScore(name, 0);
        }
    }

    scoreFullHouse(score, name) {
        const values = Object.values(this.getFaceCounts());
        const test1 = (values.filter(item => item === 3) > 0);
        const test2 = (values.filter(item => item === 2) > 0);
        if(test1 && test2) {
            this.updateScore(name, score);
        } else {
            this.updateScore(name, 0);
        }
    }

    scoreStraight(numOfDice, name) {
        const test = this.countSequence(numOfDice);
        if(test) {
            let score = name === 'Large straight' ? 40 : 30;
            this.updateScore(name, score);
        } else {
            this.updateScore(name, 0)
        }
    }

    scoreChance(val, name) {
        const score = this.sumOfDice();
        this.updateScore(name, score);
    }

    countSequence(diceInSequence) {
        const values = Object.keys(this.getFaceCounts()).sort();
        if(Number(values[0]) === values[diceInSequence-1] - (diceInSequence-1)) {
            return true;
        } else if (Number(values[1]) === values[diceInSequence-1] - (diceInSequence-1)) {
            return true;
        } else {
            return false;
        }
    }

    getFaceCounts() {
        const {dice} = this.state;
        let counter = {};
        dice.forEach(item=> {
            counter[item.value] = (counter[item.value] || 0 ) + 1;
        })
        return counter;
    }

    updateScore(name, score) {
        this.setState(st => ({
            scores: st.scores.map(item => ((item.name === name && !item.counted) ? {...item, score: score, counted: true} : item )),
            rolls: 3,
            dice: st.dice.map(item => ({...item, locked: false}))
        }));
        this.rollDice();
    }

    sumOfDice() {
        const {dice} = this.state;
        let score = 0;
        dice.forEach(item => {
            score += item.value;
        });
        return score;
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
                scoreFn={this[item.scoreFn]}
                value={item.value}
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