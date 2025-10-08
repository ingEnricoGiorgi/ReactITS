import React from "react";
import TodoItem from "./ToDoItem";

export default function ToDoList({ todos, onDelete }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18 }}>
      {todos.map((value, index) => (
        <TodoItem key={index} item={value} index={index} onDelete={onDelete} />
      ))}
    </ul>
  );
}
