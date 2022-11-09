import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

import "./colored-circle.styles.css"

const RADIUS_DOT = 5;
const useStyles = makeStyles((theme) => ({
  circle: {
    borderRadius: RADIUS_DOT,
    height: RADIUS_DOT * 2,
    width: RADIUS_DOT * 2,
    padding: 0,
  },
}));

const ColoredCircle = ({ color }) => {
  const styles = { backgroundColor: color };
  const classes = useStyles();

  return color ? (
    <Fragment>
      <div id="bubble" className={classes.circle} style={styles} />
    </Fragment>
  ) : null;
};

export default ColoredCircle;