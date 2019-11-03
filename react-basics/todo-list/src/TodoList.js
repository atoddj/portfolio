import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="Todo-List">
                <h1>Todo List!</h1>
                <Todo />
                <TodoForm />
            </div>
         );
    }
}
 
export default TodoList;