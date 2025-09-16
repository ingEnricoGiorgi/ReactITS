import { useState } from "react";
import AddTodo  from "../components/AddToDo";
import TodoList from "../components/ToDoList";

export default function ToDoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Studiare React", done: false },
    { id: 2, title: "Fare la spesa", done: true },
  ]);
  const [filterText, setFilterText] = useState("");

  const onAdd = (title) =>
    setTodos(t => [...t, { id: Date.now(), title, done: false }]);

  const onToggle = (id) =>
    setTodos(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x));

  const onDelete = (id) =>
    setTodos(t => t.filter(x => x.id !== id));

  const visible = todos.filter(t =>
    t.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <main style={{ maxWidth: 560, margin: "40px auto", padding: 16 }}>
      <h1>TodoApp</h1>

      <AddTodo onAdd={onAdd} />

      <input
        placeholder="Filtra…"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ width: "100%", padding: 8, margin: "12px 0" }}
      />

      <TodoList
        todos={visible}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </main>
  );
}
