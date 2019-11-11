import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {name, score} = this.props; 
        return ( 
            <div className="row">
                <div>{name}</div>
                <div>{score}</div>
            </div>
         );
    }
}
 
export default Row;