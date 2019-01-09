import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sidedrawer = props => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav style={{ marginTop: "2rem" }}>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sidedrawer;
