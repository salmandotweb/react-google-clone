import React from "react";
import Input from "../../Components/Input/Input";
import Menu from "../../Components/Menu/Menu";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn"
        >
          Gmail
        </a>
        <a
          href="https://www.google.com/photos/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn"
        >
          Images
        </a>
        <Menu />
        <div className={classes.user}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
      </div>
      <div className={classes.searchContainer}>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          alt=""
        />
        <Input />
        <div className={classes.btnContainer}>
          <button className={`btn ${classes.searchBtn}`}>Google Search</button>
          <button className={`btn ${classes.searchBtn}`}>
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
