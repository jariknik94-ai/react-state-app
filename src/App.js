import React, { useState } from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import "./App.css";

const App = () => {

  // состояние темы (светлая / тёмная)
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* переключатель темы */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Светлая" : "🌙 Тёмная"}
      </button>

      <h1 className="title">React State App</h1>

      <div className="container">
        <Counter />
        <Timer />
      </div>

    </div>
  );
};

export default App;