import React, {Component} from 'react';

class DisplayNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            displayButton: true
        };
        this.generateRandomNum = this.generateRandomNum.bind(this);
    }

    generateRandomNum(e) {
        let rand = Math.floor(Math.random() * 10);
        this.setState({num: rand});
        if(rand === 7) {
            this.setState({displayButton: false});
        }
    }

    render() {
        var button = <button onClick={this.generateRandomNum}>Generate number</button>;
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.displayButton ? button : 'LUCKY NUMBER 7'}
            </div>
        )
    }
}

export default DisplayNumber;