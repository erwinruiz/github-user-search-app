import React, { ReactNode, useState, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const userProperties = {
  avatar_url: "",
  name: "",
  login: "",
  created_at: "",
  bio: "",
  public_repos: "",
  followers: "",
  following: "",
  location: "",
  blog: "",
  twitter_username: "",
  company: "",
};

const Context = React.createContext({
  user: userProperties,
  getUser: (username: string) => {},
  userNotFound: false,
});

function ContextProvider(props: Props) {
  const [user, setUser] = useState(userProperties);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    getUserHandler("octocat");
  }, []);

  const getUserHandler = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      setUserNotFound(true);
      return;
    }

    const data = await response.json();
    setUser(data);
    setUserNotFound(false);
  };

  return (
    <Context.Provider
      value={{
        user: user,
        getUser: getUserHandler,
        userNotFound,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
