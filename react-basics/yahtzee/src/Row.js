import React, { Component } from 'react';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {value, name} = this.props
        this.props.scoreFn(value, name);
    }

    render() {
        const {name, score, counted} = this.props;
        return ( 
            <div className="row" onClick={this.handleClick}>
                <div className="row-name">{name}</div>
                <div className={`row-score ${(counted && score === 0)  ? 'error' : ''}`}>{score}</div>
            </div>
         );
    }
}
 
export default Row;