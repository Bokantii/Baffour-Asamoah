import React from "react";
import classes from "./Service.module.scss";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
const Service = ({ imgSrc, heading, body }) => {
  return (
    <section className={classes.service}>
      <img src={imgSrc} alt={heading} />
      <h3>{heading}</h3>
      <p>{body}</p>
    </section>
  );
};

export default Service;
