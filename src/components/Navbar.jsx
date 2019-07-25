import React, { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [dark, setDark] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDark(!dark);
  };
  
  useEffect(() => {
    const el = document.querySelector(".App");
    if (dark) {
      el.classList.add("dark-mode");
    } else {
      el.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={dark ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
