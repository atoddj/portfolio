import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Board">
                <h1>Board</h1>
                <Cell />
            </div>
        );
    }
}
 
export default Board;