import React, { Component } from 'react';

class Hangman extends Component {
    static defaultProps = {
        alphabet: ['a', 'b', 'c', 'd']
    }      
    constructor(props) {
        super(props);
        this.state = { 
            guesses: this.formatData(this.props.alphabet)
         }
    }

    formatData(alphabet) {
        var arrayOfObjects = alphabet.map((item) => {
            let temp = {};
            temp[item] = {guessed: false};
            return temp;
        });
        var newResult = Object.assign({}, ...arrayOfObjects)
        return newResult;
    }

    render() { 
        return ( 
            <div className="Hangman">
                Hangman!
            </div>
         );
    }
}
 
export default Hangman;