import React from 'react';
import './todo.css';
class SubmitForm extends React.Component {
    state = { term: '' };
  
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: '' });
    }
    handleChange=(e) => this.setState({term: e.target.value})
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Enter Item'
            value={this.state.term}
            // onChange={(e) => this.setState({term: e.target.value})}
            onChange={this.handleChange}
          />
          <button className='button'>Submit</button>
        </form>
      );
    }
  }
  export default SubmitForm;
  
  