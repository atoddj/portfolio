import React, {Component} from 'react';
import Die from './Die';
import './Diceroll.css';

class Diceroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            die1: 1,
            die2: 1
        };
        this.rollDice = this.rollDice.bind(this);
    }
    rollDice() {
        this.setState({rolling: true, className: ' active'});
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            this.setState({rolling: false, die1: rand1, die2: rand2});
        }, 700);
    }
    render() {
        var button = <button onClick={this.rollDice} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll the dice!'}</button>;
        return (
            <div className={`diceroll ${this.state.rolling ? ' active' : ''}`}>
                <Die number={this.state.die1} />
                <Die number={this.state.die2} />
                <div className="diceroll-button">
                    {button}
                </div>
            </div>
        );
    }
}

export default Diceroll;