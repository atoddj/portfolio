import React, { Component } from 'react';
import Letter from './Letter';
import './Hangman.css';

class Hangman extends Component {
    static defaultProps = {
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }      
    constructor(props) {
        super(props);
        this.state = { 
            guesses: this.formatData(this.props.alphabet)
         }
    }

    formatData(alphabet) {
        return alphabet.map((item, index) => {
            return {letter: item, guessed: false};
        });
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
            </div>
         );
    }
}
 
export default Hangman;