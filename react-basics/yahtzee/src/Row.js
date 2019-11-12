import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {value, name} = this.props
        this.props.scoreFn(value, name);
    }

    render() {
        const {name, score} = this.props; 
        return ( 
            <div className="row" onClick={this.handleClick}>
                <div>{name}</div>
                <div>{score}</div>
            </div>
         );
    }
}
 
export default Row;