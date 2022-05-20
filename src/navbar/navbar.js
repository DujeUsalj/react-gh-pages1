import React from "react";
import classes from "./navbar.module.css";
function navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Wrapper}>
        <p className={classes.Text}>Clubs</p>
        <p className={classes.Text}>Groups</p>
        <p className={classes.Text}>Stats</p>
        <p className={classes.Text}>History</p>
      </div>
    </div>
  );
}

export default navbar;
