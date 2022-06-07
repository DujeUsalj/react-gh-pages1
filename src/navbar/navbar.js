import React from "react";
import classes from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
function navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Wrapper}>
        <Link className={classes.Text} to="/react-gh-pages1">
          Home
        </Link>
        <Link className={classes.Text} to="/react-gh-pages1/Clubs">
          Clubs
        </Link>
        <Link className={classes.Text} to="/react-gh-pages1/Groups">
          Groups
        </Link>
        <Link className={classes.Text} to="/react-gh-pages1/Stats">
          Stats
        </Link>
        <Link className={classes.Text} to="/react-gh-pages1/History">
          History
        </Link>
      </div>
    </div>
  );
}

export default navbar;
