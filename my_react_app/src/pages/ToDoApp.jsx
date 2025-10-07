import React from "react";
import TodoList from "../components/todoList";
import AddTodo from "../components/addTodo";
import FilterTodo from "../components/filterTodo";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["scatola", "scrivania", "skibbybobbidy", "forzanapoli"]
        };
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.filterTodo = this.filterTodo.bind(this)
    }

    deleteTodo(index) {
        let currentTodos = [...this.state.todos]
        currentTodos.splice(index, 1)
        this.setState(
            { todos: currentTodos}
        )
    }

    addTodo(todo) {
        let currentTodos = [...this.state.todos]
        currentTodos.push(todo)
        this.setState(
            { todos: currentTodos}
        )
    }

    filterTodo(filterText) {
        let currentTodos = [...this.state.todos]
        let filteredTodos = currentTodos.filter((value) => value.toLowerCase().includes(filterText.toLowerCase()))
        this.setState(
            { todos: filteredTodos}
        )
    }

render() {
  return (
    <div
      style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1vh"
      }}
    >
      <h1>Todo App</h1>
      <FilterTodo filterTodo={this.filterTodo} />
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
}

}

export default TodoApp;