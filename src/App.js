import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(){
    super();
  this.state = {
    todos : [],
    input : ''
  }

  }

  handleChange = e => {
    console.log(e.target)
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.input,
      id: Date.now(),
      completed:false
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      input:''
    })
  }
  // you will need a place to store your state in this component. 
  // create a constructor function, include super, which gives access to this.state//
      //this will give access to this.state in the render method



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} handleChange={this.handleChange} input={this.state.input}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
