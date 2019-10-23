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
        this.state = {};
    };

    render() {
        var balls = [];
        for (let i = 0, j = this.props.numBalls; i < j; i++) {
            let value = Math.floor(Math.random() * this.props.maxNum) + 1;
            balls.push(<Ball key={i} number={value} />);
        }
        return (
            <div className="lottery">
                <h2>{this.props.title}</h2>
                <div className="lottery-balls">
                    {balls}
                </div>
            </div>
        )
    };
}

export default Lottery;