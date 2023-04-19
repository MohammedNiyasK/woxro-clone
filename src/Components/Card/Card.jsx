import React from "react";
import classes from "./Card.module.css";

const Card = ({ img, title, description, background }) => {
  return (
    <div className={classes.card} style={{ background: background }}>
      <img src={img} alt="image" />
      <h3>{title}</h3>
      <p>{description} </p>
    </div>
  );
};

export default Card;
