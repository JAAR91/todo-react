import React, { Component } from "react"

class InputTodo extends Component {
    
  state = {
    title: ""
  }; 

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
        title: ""
    });
  };
  
  render() {
    return (
      <form 
        className="m-2 p-2 border rounded d-flex bg-light"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control"
          name="title"
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          className="mx-2 btn btn-outline-success"
        >Submit</button>
      </form>
    );
  }
}
export default InputTodo;