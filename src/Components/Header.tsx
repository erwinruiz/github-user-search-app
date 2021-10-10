import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1>devfinder</h1>
      <div className={classes["theme-mode"]}>
        <h4>Dark</h4>
        <img src="./assets/icon-moon.svg" alt="moon icon" />
      </div>
    </header>
  );
}

export default Header;
