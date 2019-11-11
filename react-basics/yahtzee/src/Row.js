import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {name} = this.props; 
        return ( 
            <div>{name}</div>
         );
    }
}
 
export default Row;