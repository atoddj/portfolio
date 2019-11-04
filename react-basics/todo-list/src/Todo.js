import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { completed: false, editing: false, newTask: this.props.task };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClick(e) {
        let prevValue = (e.target.getAttribute('value') === 'true');
        let keyName = e.target.getAttribute('name');
        this.setState({
            [keyName]: !prevValue
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTask(this.props.id, this.state.newTask);
        this.setState({
            editing: false
        })
    }

    render() { 
        if(this.state.editing) {
            return (
               <form onSubmit={this.handleSubmit}>
                   <input type="text" onChange={this.handleChange} value={this.state.newTask} name="newTask" />
                   <button>Update</button>
               </form>
            )
        } 
        return ( 
            <div>
                <div className={"Todo" + (this.state.completed ? " completed": '')}name="completed" onClick={this.handleClick} value={this.state.completed}>
                    {this.props.task} 
                </div>
                <div className="fas fa-pencil-alt" name="editing" onClick={this.handleClick} value={this.state.editing} />
                <button onClick={this.handleRemove}>X</button>
            </div>
         );
    }
}
 
export default Todo;