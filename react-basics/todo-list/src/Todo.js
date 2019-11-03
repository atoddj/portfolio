import React, { Component } from 'react';

class Todo extends Component {
    render() { 
        return ( 
            <div className="Todo">
                {this.props.task}
            </div>
         );
    }
}
 
export default Todo;