import React, { Component } from 'react';
import './Die.css';

const fontAwesome = {
    1: "fas fa-dice-one",
    2: "fas fa-dice-two",
    3: "fas fa-dice-three",
    4: "fas fa-dice-four",
    5: "fas fa-dice-five",
    6: "fas fa-dice-six"
}

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {id} = this.props;
        this.props.lockDie(id);
    }

    render() { 
        const {value,frozen} = this.props;
        var classNames = `Die ${fontAwesome[value]}`;
        if (frozen) {
            classNames += ' frozen';
        }
        return (
            <div className={classNames} onClick={this.handleClick} />
        )
    }
}
 
export default Die;