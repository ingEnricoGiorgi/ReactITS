import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  function submit(e) {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    onAdd(t);
    setTitle("");
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nuovo todo"
        style={{ flex: 1, padding: 8 }}
      />
      <button>Aggiungi</button>
    </form>
  );
}
