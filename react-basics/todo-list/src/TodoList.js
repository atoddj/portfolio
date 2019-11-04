import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: []  }
        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.remove = this.remove.bind(this);
    }

    addTask(task) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task ] 
        }))
    }

    updateTask(id, newTask) {
        let foundTask = this.state.tasks.find(task => task.id === id);
        foundTask.task = newTask;
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => task = task.id === id ? foundTask : task)
        }))
    }
    remove(id) {
        this.setState({
            tasks: this.state.tasks.filter(t => t.id !== id)
        })
    }

    render() { 
        return ( 
            <div className="Todo-List">
                <h1>Todo List!</h1>
                <TodoForm createTask={this.addTask}/>
                {this.state.tasks.map(task => (
                    <Todo 
                        key={task.id}
                        task={task.task}
                        updateTask={this.updateTask}
                        removeTodo={this.remove}
                        id={task.id}
                    />
                ))}
            </div>
         );
    }
}
 
export default TodoList;