import React from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {

  constructor() {
    super();

    const LoadLocalStorage = JSON.parse(localStorage.getItem("ToDo"));
    console.log(LoadLocalStorage);

    const DefaultTod = {
      todos: [
        {
          id: 1,
          title: "Setup development environment",
          completed: true
        },
        {
          id: 2,
          title: "Develop website and add content",
          completed: false
        },
        {
          id: 3,
          title: "Deploy to live server",
          completed: false
        }
      ]
    };
    this.state = LoadLocalStorage ? LoadLocalStorage : DefaultTod;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.todos);
    localStorage.setItem("ToDo", JSON.stringify(this.state));
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }));
  };

  delTodo = id => {
    const newArray = {
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    };
    this.setState(newArray);
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    const updateTodo = {
      todos: [...this.state.todos, newTodo]
    };
    this.setState(updateTodo);
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  render() {
    const ans = (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
    return ans;
  }
}

export default TodoContainer;