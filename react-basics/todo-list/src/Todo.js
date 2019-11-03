import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { completed: false, editing: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let prevValue = (e.target.getAttribute('value') === 'true');
        let keyName = e.target.getAttribute('name');
        this.setState({
            [keyName]: !prevValue
        })
    }
    render() { 
        if(this.state.editing) {
            return (
               <form onSubmit={this.handleSubmit}>
                   <input type="text" onChange={this.handleChange} value={this.props.task} />
                   <button>Update</button>
               </form>
            )
        } 
        return ( 
            <div className={"Todo" + (this.state.completed ? " completed": '')} >
                <div name="completed" onClick={this.handleClick} value={this.state.completed}>
                    {this.props.task} 
                </div>
                <div className="fas fa-pencil-alt" name="editing" onClick={this.handleClick} value={this.state.editing} />
            </div>
         );
    }
}
 
export default Todo;