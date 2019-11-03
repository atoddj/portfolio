import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: []  }
        this.addTask = this.addTask.bind(this);
    }

    addTask(task) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task ] 
        }))
    }

    render() { 
        return ( 
            <div className="Todo-List">
                <h1>Todo List!</h1>
                {this.state.tasks.map(task => (
                    <Todo 
                        task={task} 
                    />
                ))}
                <TodoForm createTask={this.addTask}/>
            </div>
         );
    }
}
 
export default TodoList;