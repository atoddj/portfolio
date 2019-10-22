import React, {Component} from 'react';
import Die from './Die';
import './Diceroll.css';

class Diceroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            disabled: 'false',
            className: '',
            die1: 1,
            die2: 1
        };
        this.rollDice = this.rollDice.bind(this);
    }
    rollDice() {
        this.setState({rolling: true, disabled: 'true', className: ' active'});
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            this.setState({rolling: false, disabled: 'false', className: ''});
            this.setState({die1: rand1});
            this.setState({die2: rand2});
        }, 700);
    }
    render() {
        var button = <button onClick={this.rollDice} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll the dice!'}</button>;
        return (
            <div className={"diceroll" + this.state.className}>
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