import { useEffect, useState } from "react";
import { PuntlandContext } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { toast } from "react-toastify";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("darkMode");
    },
    [isDark]
  );
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
      toast.success("LogOut Successfully");
      // No need to manually redirect. Your App component will detect user === null and show LoginPage
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
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
      <button
        onClick={handleLogout}
        className="bg-blue-400 text-white ml-6 cursor-pointer px-8 py-3 rounded text-2xl"
      >
        LogOut
      </button>
    </header>
  );
}

export default Header;
