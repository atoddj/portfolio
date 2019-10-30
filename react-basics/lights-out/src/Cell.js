import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
    render() { 
        return ( 
            <div className={"Cell " + (this.props.lightOn ? 'on' : 'off')}>
            </div>
        );
    }
}
 
export default Cell;