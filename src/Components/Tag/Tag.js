import React from "react";
import classes from "./Tag.module.css";

const Tag = () => {
  return (
    <div className={classes.tag}>
      <a
        href="https://github.com/salmandotweb"
        target="_blank"
        rel="noreferrer noopener"
      >
        @Salmandotweb
      </a>
    </div>
  );
};

export default Tag;
