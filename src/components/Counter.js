import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {

  const [count, setCount] = useState(0);

  // обработка клавиш
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") setCount(prev => prev + 1);
      if (e.key === "ArrowDown") setCount(prev => prev - 1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="card counter">

      <h2>Счётчик</h2>

      {/* анимация числа */}
      <p className="count">{count}</p>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

    </div>
  );
};

export default Counter;