import React from "react";
import classes from "./history.module.css";
function history() {
  return (
    <div className={classes.History}>
      <div className={classes.DisplayColumn}>
        <div className={classes.DivVideo}></div>
        <div className={classes.DivStats}></div>
      </div>
    </div>
  );
}

export default history;
