import React, { Component } from 'react';
import Letter from './Letter';
import './Hangman.css';

class Hangman extends Component {
    static defaultProps = {
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        maxWrongGuesses: 10
    }      
    constructor(props) {
        super(props);
        this.state = { 
            guesses: this.formatData(this.props.alphabet),
            word: 'apple'.split(''),
            guessValue: '',
            errorMessage: '',
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
        console.log(result);

        if(result && result.guessed === true) {
            this.setState({errorMessage: 'You have already guessed this letter'})
        } else if (result && result.guessed === false) {
            this.setState((prevState) => ({
                guesses: prevState.guesses.map(el => el.letter === currGuess ? {...el, guessed: true} : el)
            }));
        } else {
            this.setState({errorMessage: 'Please input a valid character [A-Z]'})
        }

        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({guessValue: event.target.value});
    }

    render() { 
        return ( 
            <div className="Hangman">
                <div className="Hangman-list-description">Already guessed</div>
                <ul className="Hangman-list">
                    {this.state.guesses.map((item) => (
                        item.guessed && <Letter data={item} />
                    ))}
                </ul>

                <form className="Hangman-guess" onSubmit={this.handleSubmit}>
                    <label>Make a guess
                    <input type="text" value={this.state.guessValue} onChange={this.handleChange} maxLength="1" onKeyUp={this.handleKeyUp} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div className="Hangman-word">
                    {/*loop over the letters in chosen word, display div with blanks*/}
                    {this.state.word.map((l) => (
                        <div className="Hangman-word-letter">
                            {this.state.guesses.find((item) => item.letter === l && item.guessed === true) && l}
                        </div>
                    ))
                    }
                </div>
            </div>
         );
    }
}
 
export default Hangman;