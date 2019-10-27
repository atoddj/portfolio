import React, { Component } from 'react';
import Letter from './Letter';
import {dictionary as randomWord} from './dictionary';
import './Hangman.css';

/*
    TODO: Add gameover + winner messages
    TODO: Add library of words + new game button
*/

class Hangman extends Component {
    static defaultProps = {
        alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        maxWrongGuesses: 6
    }      
    constructor(props) {
        super(props);
        this.state = { 
            guesses: this.formatData(this.props.alphabet),
            word: randomWord[Math.floor(Math.random() * randomWord.length)].split(''),
            guessValue: '',
            errorMessage: '',
            wrongGuesses: this.props.maxWrongGuesses
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    formatData(alphabet) {
        return alphabet.map((item, index) => {
            return {letter: item, guessed: false};
        });
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
                guesses: prevState.guesses.map(el => el.letter === currGuess ? {...el, guessed: true} : el)
            }));
            this.setState({errorMessage: '', guessValue: ''});
        } else {
            this.setState({errorMessage: 'Please input a valid character [A-Z]'})
        }

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({guessValue: event.target.value});
    }

    render() {
        let lose = this.state.wrongGuesses === 0;
        return ( 
            <div className="Hangman">
                {lose && <div class="Hangman-lose">You lose, try again</div>}
                <h1 className="Hangman-list-description">{this.state.wrongGuesses} incorrect guesses left</h1>
                <ul className="Hangman-list">
                    {this.state.guesses.map((item) => (
                        item.guessed && <Letter data={item} />
                    ))}
                </ul>

                <form className="Hangman-guess" onSubmit={this.handleSubmit}>
                    <label>Guess a letter 
                    <input type="text" value={this.state.guessValue} onChange={this.handleChange} maxLength="1" onKeyUp={this.handleKeyUp} disabled={lose}/>
                    </label>
                    <input type="submit" value="Submit" disabled={lose} />
                </form>
                {this.state.errorMessage && 
                    <div className="Hangman-error">
                        {this.state.errorMessage}
                    </div> 
                }

                <div className="Hangman-word">
                    {this.state.word.map((l) => (
                        <div className="Hangman-word-letter">
                            { (this.state.guesses.find((item) => item.letter === l && item.guessed === true) && l) || (lose && <span style={{color: 'red'}}> {l} </span>) }
                        </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default Hangman;