import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render() { 
        return ( 
            <div className={"Cell " + (this.props.light && 'on')} number={this.props.number} onClick={this.props.handleClick}>
            </div>
        );
    }
}
 
export default Cell;