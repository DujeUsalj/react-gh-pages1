import React from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
function navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Wrapper}>
        <a
          className={classes.Text}
          href="http://localhost:3000/react-gh-pages1/Clubs"
        >
          Clubs
        </a>
        <a
          className={classes.Text}
          href="http://localhost:3000/react-gh-pages1/Groups"
        >
          Groups
        </a>
        <a
          className={classes.Text}
          href="http://localhost:3000/react-gh-pages1/Stats"
        >
          Stats
        </a>
        <a
          className={classes.Text}
          href="http://localhost:3000/react-gh-pages1/"
        >
          History
        </a>
      </div>
    </div>
  );
}

export default navbar;
