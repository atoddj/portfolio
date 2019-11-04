import React, { Component } from 'react';
import uuid from 'uuid/v4';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createTask({...this.state, id: uuid()});
        this.setState({task: ""})
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input type="text" name="task" id="task" onChange={this.handleChange} value={this.state.task} />
                <button>Add</button>
            </form>
         );
    }
}
 
export default TodoForm;