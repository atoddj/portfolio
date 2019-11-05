import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(task) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task ] 
        }))
    }

    update(id, newTask) {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => task = task.id === id ? {...task, task: newTask} : task)
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
                <TodoForm createTask={this.create}/>
                {this.state.tasks.map(task => (
                    <Todo 
                        key={task.id}
                        task={task.task}
                        updateTask={this.update}
                        removeTask={this.remove}
                        id={task.id}
                    />
                ))}
            </div>
         );
    }
}
 
export default TodoList;