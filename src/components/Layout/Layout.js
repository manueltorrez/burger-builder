import React from "react";

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = props => (
  <>
    <Toolbar />
    <Sidedrawer />
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default layout;
