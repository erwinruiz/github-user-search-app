import { Fragment } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Search from "./Components/Search";

function App() {
  return (
    <Fragment>
      <Header />
      <Search />
      <Profile />
    </Fragment>
  );
}

export default App;
