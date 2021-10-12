import classes from "./Profile.module.css";

function Profile() {
  return (
    <main className={classes.container}>
      <div className={classes["user-data"]}>
        <img src="./assets/icon-company.svg" alt="User" />
        <div className={classes.info}>
          <h3>The Octocat</h3>
          <p className={classes.username}>@octocat</p>
          <p className={classes["date-joined"]}>Joined 25 Jan 2011</p>
        </div>
      </div>
      <p className={classes["text-content"]}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className={classes.stats}>
        <div className={classes.stat}>
          <p className={classes.title}>Repos</p>
          <p className={classes.total}>8</p>
        </div>
        <div className={classes.stat}>
          <p className={classes.title}>Followers</p>
          <p className={classes.total}>3938</p>
        </div>
        <div className={classes.stat}>
          <p className={classes.title}>Following</p>
          <p className={classes.total}>9</p>
        </div>
      </div>
      <div className={classes.links}>
        <div className={classes.link}>
          <img src="./assets/icon-location.svg" alt="Location" />
          <a href="/">San Francisco</a>
        </div>
        <div className={classes.link}>
          <img src="./assets/icon-website.svg" alt="Website" />
          <a href="/">https://github.blog</a>
        </div>
        <div className={`${classes.link} ${classes["link-not-available"]}`}>
          <img src="./assets/icon-twitter.svg" alt="Twitter" />
          <a href="/">Not Available</a>
        </div>
        <div className={classes.link}>
          <img src="./assets/icon-company.svg" alt="Company" />
          <a href="/">@github</a>
        </div>
      </div>
    </main>
  );
}

export default Profile;
