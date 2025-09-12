import React, { useState } from "react";

export default function CoinFlipper() {
  const [side, setSide] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    setSide(result);
    if (result === "heads") setHeadsCount(prev => prev + 1);
    else setTailsCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Coin Flipper</h1>
      <button onClick={flipCoin}>Flip Coin</button>

      {side && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={
              side === "heads"
                ? "https://tinyurl.com/react-coin-heads-jpg"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/1024px-US_50_Cent_Rev.png"
            }
            alt={side}
            width="150"
          />
          <p>Result: {side}</p>
        </div>
      )}

      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
      <p>Total Flips: {headsCount + tailsCount}</p>
    </div>
  );
}
