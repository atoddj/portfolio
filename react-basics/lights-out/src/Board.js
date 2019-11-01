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
        this.resetGame = this.resetGame.bind(this);
    }

    componentDidMount() {
        !this.state.boardGenerated && this.randomClick();
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
         return board;
    }

    handleClick(e,y) {
        let coords;
        if (arguments.length > 1) {
            coords = {col: y, row:e }
        } else {
            let number = Number(e.target.getAttribute('number'));
            coords = this.state.grid.find(item => item.value === number);
        }
        let coordsArr = [];
        coordsArr.push([coords.row, coords.col]);
        if(coords.col > 0) { coordsArr.push([coords.row, coords.col-1]) }
        if(coords.col < this.props.boardSize-1) { coordsArr.push([coords.row, coords.col+1]) }
        if(coords.row > 0) { coordsArr.push([coords.row-1, coords.col]) }
        if(coords.row < this.props.boardSize-1) { coordsArr.push([coords.row+1, coords.col]) }
        coordsArr.forEach((item) => {
            this.toggleLight(item[0], item[1])
        });
    }

    toggleLight(x,y) {
        this.setState(prevState => ({
            grid: prevState.grid.map((item) => (item.row === x && item.col === y ? {...item, light: !item.light} : item))
        }), () => {
            this.checkVictory();
        })
    }

    checkVictory() {
        let lightsOn = this.state.grid.find(item => item.light === true);
        if (!lightsOn) {
            this.setState({victory: true})
        }
    }

    randomClick() {
        this.setState({boardGenerated: true});
        let numClicks = Array.from({length: Math.floor(Math.random() * 15) + 1});
        numClicks.forEach(() => {
            let value = Math.floor(Math.random() * this.props.boardSize**2);
            let clicked = this.state.grid.find(el => el.value === value);
            this.handleClick(clicked.row, clicked.col);
        });
    }

    resetGame() {
        this.setState(prevState => ({
            victory: false,
            grid: this.createGridObj(),
            boardGenerated: false
        }))
        this.randomClick();
    }

    render() { 
        return ( 
            <div className="Board">
                <h1 className="Board-title">Board</h1>
                { this.generateBoard() }
                { this.state.victory && 
                <div className="Board-victory">
                    <span className="Board-message">YOU WIN YO</span>
                    <button className="Board-reset" onClick={this.resetGame}>Play again?</button>
                </div> 
                }
            </div>
        );
    }
}
 
export default Board;