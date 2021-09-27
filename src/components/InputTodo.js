import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('This object cant be empty!');// eslint-disable-line
    }
  };

  render() {
    const { title } = this.state;
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
          value={title}
          onChange={this.onChange}
        />
        <button
          type="button"
          className="mx-2 input-submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
