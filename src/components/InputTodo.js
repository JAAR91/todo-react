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
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("This object cant be empty!")
    }
  };
  
  render() {
    return (
      <form 
        className="m-2 p-2 form-container"
        onSubmit={this.handleSubmit}
      >
        <input
          className="input-text"
          name="title"
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          className="mx-2 input-submit"
        >Submit</button>
      </form>
    );
  }
}
export default InputTodo;