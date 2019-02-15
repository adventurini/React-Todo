import React from 'react';

const TodoForm = props => {
    
    return(
        <div className= "form">
        <form onSubmit={props.addTodo}>
        <input 
        type='text' 
        placeholder='task' 
        name='input' 
        value={props.input}
        onChange= {props.handleChange}
        />
        <button type="submit">Add Task</button>
        </form>
        </div>
    )
   
}

export default TodoForm;