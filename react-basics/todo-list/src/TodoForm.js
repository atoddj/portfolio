import React, { Component } from 'react';
import { format } from 'util';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' }
    }
    render() { 
        return ( 
            <form>
                <label htmlFor="task">New Todo</label>
                <input type="text" name="task" id="task" value={this.state.task} />
            </form>
         );
    }
}
 
export default TodoForm;