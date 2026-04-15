import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {

  const [time, setTime] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  // таймер
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, intervalTime);

    return () => clearInterval(timer);

  }, [isRunning, intervalTime]);

  // формат mm:ss
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="card timer">

      <h2>Таймер</h2>

      <p className="time">{formatTime()}</p>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Пауза" : "Старт"}
      </button>

      <button onClick={() => setTime(0)}>Сброс</button>

      <input
        type="number"
        placeholder="Интервал (мс)"
        onChange={(e) => setIntervalTime(Number(e.target.value))}
      />

    </div>
  );
};

export default Timer;