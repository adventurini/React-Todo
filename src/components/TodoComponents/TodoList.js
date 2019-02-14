// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'



const TodoList= props =>{
    return(
    <div className="task">
    {props.todos.map(todo => {
    return (
       
    <Todo todo={todo} key={todo.id}/>
    
    )})}
    <p>{props.todos.task}</p>
    </div>
    )
}

export default TodoList;