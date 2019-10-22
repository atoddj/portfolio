import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let classes = {
            1: "fas fa-dice-one",
            2: "fas fa-dice-two",
            3: "fas fa-dice-three",
            4: "fas fa-dice-four",
            5: "fas fa-dice-five",
            6: "fas fa-dice-six",
        };
        return (
            <div className="die">
                <i className={classes[this.props.number]}></i>
            </div>
        );
    }
}

export default Die;