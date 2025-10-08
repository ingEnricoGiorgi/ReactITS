import React, { useEffect, useMemo, useState } from "react";
import TodoList from "../components/ToDoList";
import AddTodo from "../components/AddToDo";
import FilterTodo from "../components/FilterToDo";

export default function ToDoApp() {
  // stato
  const [allTodos, setAllTodos] = useState(() => {
    // inizializza da localStorage se presente
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : ["scatola", "scrivania", "skibbybobbidy", "forzanapoli"];
  });
  const [filterText, setFilterText] = useState("");

  // effetti
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]); // salva ogni volta che cambia la lista

  // lista visibile calcolata (memo per evitare ricalcoli inutili)
  const visibleTodos = useMemo(() => {
    if (!filterText) return allTodos;
    const q = filterText.toLowerCase();
    return allTodos.filter(v => v.toLowerCase().includes(q));
  }, [allTodos, filterText]);

  // azioni
  function addTodo(todo) {
    const t = (todo || "").trim();
    if (!t) return;
    setAllTodos(prev => [...prev, t]);
  }

  function deleteTodo(indexInVisible) {
    const toDelete = visibleTodos[indexInVisible];
    // rimuove SOLO la prima occorrenza uguale
    let removed = false;
    setAllTodos(prev =>
      prev.filter(v => {
        if (!removed && v === toDelete) {
          removed = true;
          return false;
        }
        return true;
      })
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "center"
      }}
    >
      <h1>Todo App</h1>
      <FilterTodo value={filterText} onChange={setFilterText} />
      <TodoList todos={visibleTodos} onDelete={deleteTodo} />
      <AddTodo onAdd={addTodo} />
    </div>
  );
}
