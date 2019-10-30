import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render() { 
        return ( 
            <div className="Cell off" onClick={this.props.handleClick}>
            </div>
        );
    }
}
 
export default Cell;