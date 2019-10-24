import React, {Component} from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        numBalls: 6,
        maxNum: 40,
        title: 'Big Lotto'
    };
    constructor(props) {
        super(props);
        this.state = { balls: Array.from({length: this.props.numBalls}) };
        this.generate = this.generate.bind(this);
    };

    generate() {
        this.setState(curState => ({
            balls: curState.balls.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }

    render() {
        return (
            <div className="lottery">
                <h2>{this.props.title}</h2>
                <div className="lottery-balls">
                    {this.state.balls.map(n => (
                        <Ball num={n} />
                    ))}
                </div>
                <button className="lottery-button" onClick={this.generate}>Generate</button>
            </div>
        )
    };
}

export default Lottery;