import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineSearch } from "react-icons/hi";
import { BsMic } from "react-icons/bs";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <button className="btn">Gmail</button>
        <button className="btn">Images</button>
        <CgMenuGridR className={classes.icon} />
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
        <form className={classes.searchInput}>
          <HiOutlineSearch className={classes.icon_2} />
          <input type="search" />
          <BsMic className={classes.icon_2} />
        </form>
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
