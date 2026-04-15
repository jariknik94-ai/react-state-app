// Импорт React и useState
import React, { useState } from "react";

// Компоненты
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Button from "./components/Button";

// Стили
import "./App.css";

const App = () => {

  // состояние темы (тёмная / светлая)
  const [darkMode, setDarkMode] = useState(false);

  // счётчик кликов кнопки
  const [clickCount, setClickCount] = useState(0);

  // обработчик клика
  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div
      className={darkMode ? "app dark" : "app"}

      // условный рендеринг фона
      style={{
        background:
          clickCount % 2 === 0
            ? "linear-gradient(135deg, #667eea, #764ba2)"
            : "linear-gradient(135deg, #ff9a9e, #fad0c4)"
      }}
    >

      {/* переключатель темы */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Светлая" : "🌙 Тёмная"}
      </button>

      <h1 className="title">React State App</h1>

      {/* КНОПКА ИЗ ЗАДАНИЯ */}
      <Button onClick={handleButtonClick} />

      <p className="click-info">
        Клики: {clickCount}
      </p>

      <div className="container">
        <Counter />
        <Timer />
      </div>

    </div>
  );
};

export default App;