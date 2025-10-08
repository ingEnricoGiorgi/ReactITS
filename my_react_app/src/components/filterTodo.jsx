import React from "react";

export default function FilterToDo({ value, onChange }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <input
        type="text"
        placeholder="Filter todos..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
