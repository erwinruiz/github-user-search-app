import classes from "./Search.module.css";
import React, { useState, useContext } from "react";
import { Context } from "../store/context";

function Search() {
  const [enteredUsername, setEnteredUsername] = useState("");

  const ctx = useContext(Context);

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredUsername.trim() !== "") {
      ctx.getUser(enteredUsername);
    }
  };

  return (
    <form className={classes.container} onSubmit={searchHandler}>
      <img src="./assets/icon-search.svg" alt="search icon" />
      <input
        className={ctx.userNotFound ? classes["user-not-found-input"] : ""}
        type="text"
        name="username"
        placeholder="Search GitHub username…"
        onChange={(e) => setEnteredUsername(e.target.value)}
      />
      {ctx.userNotFound && (
        <p className={classes["error-message"]}>No results</p>
      )}
      <button>Search</button>
    </form>
  );
}

export default Search;
