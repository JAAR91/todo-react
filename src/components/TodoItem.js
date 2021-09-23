import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
        <li className="my-1 rounded border p-2">
          <input 
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          /> 
            <button 
                className="btn btn-outline-danger mx-2"
                onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
            >Delete</button>
            {this.props.todo.title}
        </li>
    );
  }
}

export default TodoItem;