import React, { useState } from "react";

export default function Counter() {
 
    const [count, setCount] = useState(0);
  // 0 valore inziale di count


  return (
    <div>
      <h2 id="counter">{count}</h2>
      <button id="increment" onClick={() => setCount(count + 1)}>+1</button>
      <span>counter</span>
      <button id="decrement" onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
