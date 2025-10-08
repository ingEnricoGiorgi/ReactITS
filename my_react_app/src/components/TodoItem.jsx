import React from "react";

export default function ToDoItem({ item, index, onDelete }) {
  return (
    <li>
      <span>{item}</span>
      <button onClick={() => onDelete(index)} style={{ marginLeft: 8 }}>
        Delete
      </button>
    </li>
  );
}
