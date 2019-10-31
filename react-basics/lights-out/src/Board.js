import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
    static defaultProps = {
        boardSize: 5
    };
    constructor(props) {
        super(props);
        this.state = { 
            grid: this.createGridObj()
        }
        this.handleClick = this.handleClick.bind(this);
    }

    createGridObj() {
        let row = 0;
        let col = 0;
        let gridObj = Array.from({length: this.props.boardSize ** 2})
            .map((el, index) => {
                let obj = {value: index, light: '', row: row, col: col}
                col++;
                if (col>this.props.boardSize-1) { 
                    col=0; 
                    row++
                }
                return obj;
            });
            return gridObj;
    }

    generateBoard() {
        let board = [];
         this.state.grid.map((item, index) => (
             board[index] = <Cell key={index} number={index} handleClick={this.handleClick} light={item.light} />
         ));
         !this.state.boardGenerated && this.randomClick();
         return board;
    }
    handleClick(e) {
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
        let number = Number(e.target.getAttribute('number'));
        let light = this.state.grid.find(item => item.value === number).light === '' ? 'on' : '';

        this.setState(state => ({
            grid: state.grid.map((item) => (item.value === number ? {...item, light: light} : item))
        }))
    }

    randomClick() {
        this.setState({boardGenerated: true});
        console.log('generated random board');
    }

    render() { 
        return ( 
            <div className="Board">
                <h1 className="Board-title">Board</h1>
                { this.generateBoard() }
            </div>
        );
    }
}
 
export default Board;