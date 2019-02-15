import React from 'react';

const Todo = props =>{
return(
        <div
    
        // item purchased
        // item
          className={`todo${props.todo.completed ? ' completed' : ''}`}
          onClick={() => props.toggleTodo(props.todo.id)}
        >
          <h3>{props.todo.task}</h3>
        </div>
      );

}

export default Todo;