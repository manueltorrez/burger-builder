import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
  <div className={classes.Spinner}>
    <div className={classes.Bounce1} />
    <div className={classes.Bounce2} />
    <div className={classes.Bounce3} />
  </div>
);

export default spinner;
