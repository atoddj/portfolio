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
    }
    generateRandomBoard() {
        //each row AND column must contain an even number of 'on' lights to be solvable
        let data = [ 
            {row: 0, col: 0, light: true}, {row: 0, col:1, light: true}, {row: 0, col:2, light: false}, {row: 0, col:3, light: false}, {row: 0, col: 4, light: false},
            {row: 1, col: 0, light: false}, {row: 1, col: 1, light: false}, {row: 1, col: 2, light: false}, {row: 1, col: 3, light: false}, {row: 1, col: 4, light: false},
            {row: 2, col: 0, light: true}, {row: 2, col: 1, light: true}, {row: 2, col: 2, light: false}, {row: 2, col: 3, light: true}, {row: 2, col: 4, light: true},
            {row: 3, col: 0, light: false}, {row: 3, col: 1, light: false}, {row: 3, col: 2, light: false}, {row: 3, col: 3, light: false}, {row: 3, col: 4, light: false},
            {row: 4, col: 0, light: false}, {row: 4, col: 1, light: false}, {row: 4, col: 2, light: false}, {row: 4, col: 3, light: true}, {row: 4, col: 4, light: true}
         ];

         let gridSize = Array.from({length: this.props.boardSize ** 2});
         let board = [];
         for (let i = 0; i < gridSize.length; i++) {
            var random_boolean = Math.random() >= 0.5;
             board[i] = <Cell key={i} onOff={random_boolean} />;
         }
         return board;
    }
    render() { 
        return ( 
            <div className="Board">
                <h1 className="Board-title">Board</h1>
                { this.generateRandomBoard() }
            </div>
        );
    }
}
 
export default Board;