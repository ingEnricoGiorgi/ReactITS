import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./pages/ToDoApp";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rotta principale → mostra direttamente la ToDoApp */}
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}
