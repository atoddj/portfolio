import React, { Component } from 'react';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {id} = this.props;
        this.props.lockDie(id);
    }

    render() { 
        const {value} = this.props;
        return (
            <div className="Die" onClick={this.handleClick}>
                {value}
            </div>
        )
    }
}
 
export default Die;