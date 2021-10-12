import classes from "./Search.module.css";
import { useState } from "react";
function Search() {
  const [userNotFound, setUserNotFound] = useState(false);
  const searchHandler = () => {
    setUserNotFound(true);
  };
  return (
    <div className={classes.container}>
      <img src="./assets/icon-search.svg" alt="search icon" />
      <input type="text" placeholder="Search GitHub username…" />
      {userNotFound && <p className={classes["error-message"]}>No results</p>}
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default Search;
