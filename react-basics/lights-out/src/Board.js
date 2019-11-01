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
                let obj = {value: index, light: false, row: row, col: col}
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
        let number = Number(e.target.getAttribute('number'));
        let coords = this.state.grid.find(item => item.value === number);
        let coordsArr = [];
        coordsArr.push([coords.row, coords.col]);
        if(coords.col > 0) { coordsArr.push([coords.row, coords.col-1]) }
        if(coords.col < this.props.boardSize-1) { coordsArr.push([coords.row, coords.col+1]) }
        if(coords.row > 0) { coordsArr.push([coords.row-1, coords.col]) }
        if(coords.row < this.props.boardSize-1) { coordsArr.push([coords.row+1, coords.col]) }
        coordsArr.forEach((item) => {
            this.toggleLight(item[0], item[1])
        })
    }

    toggleLight(x,y) {
        this.setState(prevState => ({
            grid: prevState.grid.map((item) => (item.row === x && item.col === y ? {...item, light: !item.light} : item))
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