import React, { useState } from "react";

export default function AddToDo({ onAdd }) {
  const [value, setValue] = useState("");

  function handleAdd() {
    onAdd(value);
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div style={{ marginTop: 12 }}>
      <input
        type="text"
        placeholder="New todo..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd} style={{ marginLeft: 6 }}>Add</button>
    </div>
  );
}
