import { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  // Detect if the user has dark color theme.
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkThemeMode, setIsDarkThemeMode] = useState(isDarkMode);

  const toggleThemeHandler = () => {
    if (isDarkThemeMode) {
      document.documentElement.setAttribute("theme-mode", "light");
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
