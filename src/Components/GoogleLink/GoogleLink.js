import React from "react";
import classes from "./GoogleLink.module.css";

const Link = ({ link, displayLink, description, url, title }) => {
  return (
    <div className={classes.link}>
      <p>{displayLink}</p>
      <a href={link}>{url}</a>
      <p>{description}</p>
    </div>
  );
};

export default Link;
