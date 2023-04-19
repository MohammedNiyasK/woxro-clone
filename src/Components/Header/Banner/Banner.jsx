import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
   
    <div className={classes.banner}>
      <h1 className={classes.banner_heading}>
        Kerala's Leading Web <br/> Design Company
      </h1>
      <p className={classes.banner_desc}>Global Web Designing Company That Provides Full-cycle Software Development Services, E-<br/>commerce & Mobile App Development Services.</p>
    </div>

   
  );
};

export default Banner;
