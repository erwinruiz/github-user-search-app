import { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  const [isDarkThemeMode, setIsDarkThemeMode] = useState(false);

  const toggleThemeHandler = () => {
    if (isDarkThemeMode) {
      document.documentElement.removeAttribute("theme-mode");
      setIsDarkThemeMode(false);
    } else {
      document.documentElement.setAttribute("theme-mode", "dark");
      setIsDarkThemeMode(true);
    }
  };
  return (
    <header className={classes.header}>
      <h1>devfinder</h1>
      <div className={classes["theme-mode"]} onClick={toggleThemeHandler}>
        <h4>{isDarkThemeMode ? "Light" : "Dark"}</h4>
        {isDarkThemeMode ? (
          <img src="./assets/icon-sun.svg" alt="sun icon" />
        ) : (
          <img src="./assets/icon-moon.svg" alt="moon icon" />
        )}
        {isDarkThemeMode ? (
          <img src="./assets/icon-sun-hover.svg" alt="sun icon" />
        ) : (
          <img src="./assets/icon-moon-hover.svg" alt="moon icon" />
        )}
      </div>
    </header>
  );
}

export default Header;
