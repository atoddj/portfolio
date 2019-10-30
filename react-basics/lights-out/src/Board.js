import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
    static defaultProps = {
        boardSize: 5
    };
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }
    generateBoard() {
         let gridSize = Array.from({length: this.props.boardSize ** 2});
         let board = [];
         for (let i = 0; i < gridSize.length; i++) {
             board[i] = <Cell key={i} handleClick={this.handleClick} />;
         }
         return board;
    }
    handleClick() {
        // 5x5 grid example
        //top row
        //corners 
        // if 0, toggle 0, 1 and 5
        // if 1, toggle 1, 0, 2, and 6
        // if 2, toggle 2, 1, 3, and 7
        // if 3, toggle 3, 2, 4, and 8
        // if 4, toggle 4, 3, and 9

        //second row
        // if 5, toggle 5, 6, 0 and 10
        // if 6, toggle 6, 5, 7, 1, and 11
        // if 7, toggle self, self-1, self+1, self-gridSize, self+gridSize

        /*----------------
        calculate columns and rows based on grid size

        numRows = gridSize;
        numCols = gridSize;

        --------------------*/
        
        console.log('clicked');
    }
    randomClick() {
        console.log('clicking random number of random tiles');
    }
    render() { 
        return ( 
            <div className="Board">
                <h1 className="Board-title">Board</h1>
                { this.generateBoard() }
                { /* simulate clicks for an always playable game */
                    this.randomClick()
                }
                
            </div>
        );
    }
}
 
export default Board;