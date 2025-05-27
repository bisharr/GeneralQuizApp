import { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("darkMode");
    },
    [isDark]
  );
  return (
    <header className="app-header">
      <img src="punt.jpg" alt="Puntland logo" />
      <h1>Puntland Quiz</h1>
      <button
        onClick={() => setIsDark((isdark) => !isdark)}
        className="btn_dark"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
