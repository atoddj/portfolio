import React, {Component} from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="lottery">
                <h1>Lottery!</h1>
                <Ball />
            </div>
        )
    }
}

export default Lottery;