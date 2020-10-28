import React, { Component } from 'react';
import './todo.css';
class TodoMain extends Component {
    state = {
        todos: ["task1", "task2"],
        dummy: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.dummy === '') return;
        const todos = [...this.state.todos, this.state.dummy];
        this.setState({ todos })
        this.setState({ dummy: "" })
    }
    handleChange = (e) => this.setState({ dummy: e.target.value });
    handleDelete = (index) => {
        let arr = [...this.state.todos];
        arr.splice(index, 1);
        this.setState({ todos: arr });
    }
    render() {
        const todos = this.state.todos.map((todo, index) => {
            return <li key={index} id={index}  >{todo}
                <button onClick={() => { this.handleDelete(index) }}>  <span>DELETE IT</span></button></li>
        })
        return <div className='container'>
            Yo Have {this.state.todos.length} TODO's to do.....
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.dummy} placeholder="Type Your Todo here....." onChange={this.handleChange} />
                <button >Submit</button>
                </form>
                <div>   {todos}  </div>
                </div>
    }
}
export default TodoMain;
