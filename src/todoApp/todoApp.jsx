import React from 'react';
import './todo.css';
import Header from './header';
import SubmitForm from './submitForm';
import TodoList from './todoList';
class TodoApp extends React.Component {
    state = {
      tasks: ['todo 1', 'todo 2', 'todo 3']
    };
  
    handleSubmit = task => {
        let tasks=[...this.state.tasks]
        tasks.push(task);
      this.setState({tasks});
    }
    
    handleDelete = (index) => {
      const newArr = [...this.state.tasks];
      newArr.splice(index, 1);
      this.setState({tasks: newArr});
    }
  
    render() {
      return(
        <div className='wrapper'>
          <div className='card frame'>
            <Header numTodos={this.state.tasks.length} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
            <SubmitForm onFormSubmit={this.handleSubmit} />
          </div>
        </div>
      );
    } 
  }  
  
   
   export default TodoApp;