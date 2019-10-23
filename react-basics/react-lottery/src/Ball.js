import React, {Component} from 'react';
import './Ball.css';

class Ball extends Component {
    render() {
        return (
            <div className="ball">
                <div>
                    {this.props.number}
                </div>
            </div>
        )
    }
}

export default Ball;