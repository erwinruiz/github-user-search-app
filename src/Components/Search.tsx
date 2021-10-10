import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.container}>
      <img src="./assets/icon-search.svg" alt="search icon" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  );
}

export default Search;
