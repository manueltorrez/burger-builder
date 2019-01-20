import React from "react";

import classes from "./Order.module.css";

const order = props => (
    <div className={classes.Order}>
        <p>Ingredients: Salad (1)</p>
        <p>Price: <span style={{fontFamily: "CooperHewittBold"}}>USD 5.45</span></p>
    </div>
);

export default order;