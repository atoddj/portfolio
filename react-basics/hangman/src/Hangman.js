import React, { Component } from 'react';
import Letter from './Letter';
import {dictionary as randomWord} from './dictionary';
import './Hangman.css';
const alphabet = ['abcdefghijklmnopqrstuvwxyz'];

class Hangman extends Component {
    static defaultProps = {
        maxWrongGuesses: 6
    }
    constructor(props) {
        super(props);
        this.state = { 
            guesses: alphabet.split('').map(item => ({letter: item, guessed: false})),
            word: randomWord[Math.floor(Math.random() * randomWord.length)].split(''),
            guessValue: '',
            errorMessage: '',
            wrongGuesses: this.props.maxWrongGuesses,
            victory: false
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.resetGame = this.resetGame.bind(this);
    }

    handleSubmit(event) {
        let currGuess = this.state.guessValue.toLowerCase();
        let result = this.state.guesses.find((item) => item.letter === currGuess);
        let correctStatus = this.state.word.findIndex(el => el === currGuess);
        if(result.guessed === false && correctStatus === -1) {
            this.setState((prevState) => ({wrongGuesses: prevState.wrongGuesses -1}));
        }

        if(result && result.guessed === true) {
            this.setState({errorMessage: 'You have already guessed this letter'})
        } else if (result && result.guessed === false) {
            this.setState((prevState) => ({
                errorMessage: '', guessValue: '',
                guesses: prevState.guesses.map(el => el.letter === currGuess ? {...el, guessed: true} : el)
            }));
        } else {
            this.setState({errorMessage: 'Please input a valid character [A-Z]'})
        }

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({guessValue: event.target.value});
    }

    resetGame() {
        this.setState({
            guesses: this.formatData(this.props.alphabet), 
            word: randomWord[Math.floor(Math.random() * randomWord.length)].split(''),
            guessValue: '', 
            errorMessage: '',
            wrongGuesses: this.props.maxWrongGuesses,
            victory: false
        })
    }

    componentDidUpdate() {
        var correctLetters = document.querySelectorAll('.Hangman-word-letter');
        let word = '' 
        for (let i = 0; i < correctLetters.length; i++) {
            const el = correctLetters[i];
            if (el.innerText) {
                word += el.innerText;
            };
        }
        if (JSON.stringify(word.split('')) === JSON.stringify(this.state.word) && !this.state.victory){
            this.setState({victory: true});
        }
    }

    displayHeading() {
        return(
            this.state.wrongGuesses === 0 ? 
            <h1 className="Hangman-list-description" style={{color: 'red'}}>You lose, try again</h1> :
            <h1 className="Hangman-list-description">{this.state.wrongGuesses} incorrect guesses left</h1>
        )
    }

    displayGuesses() {
        return( this.state.guesses.map(item => item.guessed && <Letter data={item} />) )
    }

    displayForm() {
        let lose = this.state.wrongGuesses === 0;
        let win = this.state.victory;
        return(
            <form className="Hangman-guess" onSubmit={this.handleSubmit}>
                <label>Guess a letter <input type="text" 
                    value={this.state.guessValue} 
                    onChange={this.handleChange} 
                    maxLength="1" 
                    onKeyUp={this.handleKeyUp} 
                    disabled={lose || win}/>
                </label>
                <input type="submit" value="Submit" disabled={lose || win} />
            </form>
        )
    }

    generateWord() {
        let lose = this.state.wrongGuesses === 0;
        return(
            this.state.word.map((l) => (
                <div className="Hangman-word-letter">
                    { (this.state.guesses.find((item) => item.letter === l && item.guessed === true) && l) || (lose && <span style={{color: 'red'}}> {l} </span>) }
                </div>
            ))
        )
    }

    displayGameOver(win) {
        return (
            win ?  
            <div className="Hangman-reset">
                Congratulations, you nailed it! <a href="/#" className="Hangman-reset" onClick={this.resetGame}>Play again?</a>
            </div> : 
            <a href="/#" className="Hangman-reset" onClick={this.resetGame}>Try again</a>
        )
    }

    render() {
        return ( 
            <div className="Hangman">
                { this.displayHeading() }

                <ul className="Hangman-list">
                    { this.displayGuesses() }
                </ul>

                { this.displayForm() }
                
                {this.state.errorMessage && <div className="Hangman-error">{this.state.errorMessage}</div> }

                <div className="Hangman-word">
                    { this.generateWord() }
                </div>
                { this.state.victory && this.displayGameOver(true) }
                { this.state.wrongGuesses === 0 && this.displayGameOver() }
            </div>
         );
    }
}
 
export default Hangman;