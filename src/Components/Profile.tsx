import classes from "./Profile.module.css";
import { useContext } from "react";
import { Context } from "../store/context";

function Profile() {
  const ctx = useContext(Context);

  const {
    avatar_url,
    name,
    login: username,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = ctx.user;

  const joinedDate = new Date(created_at).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <main className={classes.container}>
      <div className={classes["user-data"]}>
        <img src={avatar_url} alt="User" />
        <div className={classes.info}>
          <h3>{name}</h3>
          <p className={classes.username}>@{username}</p>
          <p className={classes["date-joined"]}>Joined {joinedDate}</p>
        </div>
      </div>
      <p className={classes["text-content"]}>
        {bio || "This profile has no bio"}
      </p>
      <div className={classes.stats}>
        <div className={classes.stat}>
          <p className={classes.title}>Repos</p>
          <p className={classes.total}>{public_repos}</p>
        </div>
        <div className={classes.stat}>
          <p className={classes.title}>Followers</p>
          <p className={classes.total}>{followers}</p>
        </div>
        <div className={classes.stat}>
          <p className={classes.title}>Following</p>
          <p className={classes.total}>{following}</p>
        </div>
      </div>
      <div className={classes.links}>
        <div
          className={`${classes.link} ${
            !location && classes["link-not-available"]
          }`}
        >
          <img src="./assets/icon-location.svg" alt="Location" />
          <a
            href={`https://www.google.com/search?q=${location}`}
            target="_blank"
            rel="noreferrer"
          >
            {location || "Not Available"}
          </a>
        </div>
        <div
          className={`${classes.link} ${
            !blog && classes["link-not-available"]
          }`}
        >
          <img src="./assets/icon-website.svg" alt="Website" />
          <a href={blog} target="_blank" rel="noreferrer">
            {blog || "Not Available"}
          </a>
        </div>
        <div
          className={`${classes.link} ${
            !twitter_username && classes["link-not-available"]
          }`}
        >
          <img src="./assets/icon-twitter.svg" alt="Twitter" />
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            {twitter_username || "Not Available"}
          </a>
        </div>
        <div
          className={`${classes.link} ${
            !company && classes["link-not-available"]
          }`}
        >
          <img src="./assets/icon-company.svg" alt="Company" />
          <a
            href={
              company &&
              `https://github.com/${company.substring(1, company.length)}`
            }
            target="_blank"
            rel="noreferrer"
          >
            {company || "Not Available"}
          </a>
        </div>
      </div>
    </main>
  );
}

export default Profile;
