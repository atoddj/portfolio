import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { completed: false };
        this.markDone = this.markDone.bind(this);
    }

    markDone() {
        let prevState = this.state.completed;
        this.setState({
            completed: !prevState
        })
    }
    render() { 
        return ( 
            <div className={"Todo" + (this.state.completed ? " completed": '')} onClick={this.markDone}>
                {this.props.task}
            </div>
         );
    }
}
 
export default Todo;