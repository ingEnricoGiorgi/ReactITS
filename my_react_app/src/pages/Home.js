import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Benvenuto</h1>
      <p>Vai alla <Link to="/coin">Coin Flipper</Link></p>
      <p>Vai alla <Link to="/feedback">Feedback</Link></p>
    </div>
  );
}
