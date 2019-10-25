import React, { Component } from 'react';
import './Letter.css';

class Letter extends Component {
    render() {
        return (
            <div className="letter">
                {this.props.data.letter}
            </div>
        )
    }
}
 
export default Letter;