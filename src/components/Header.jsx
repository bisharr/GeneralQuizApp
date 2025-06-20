import { useContext, useEffect, useState } from "react";
import { PuntlandContext } from "../App";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("darkMode");
    },
    [isDark]
  );
  return (
    <header className="app-header ">
      <img
        style={{ height: "100px", borderRadius: "10px" }}
        src="punt.jpg"
        alt="quiz logo"
      />
      <h1 className="">General Quiz </h1>
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
