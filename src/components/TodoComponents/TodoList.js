// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'



const TodoList= props =>{
    const sortedList = props.todos.sort((a,b) => a.completed-b.completed);
    return(
    <div className="todo-list">
    {sortedList.map(todo => (
       
    <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
    )
    )}
    <p>{props.todos.task}</p>
    </div>
    )
}

export default TodoList;