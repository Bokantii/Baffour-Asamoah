import React from "react";
import classes from "./Service.module.scss";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
const Service = ({ imgSrc, heading, body,altClassName }) => {
  const className = altClassName ? `${classes.service} ${classes.altClassName}` : classes.service;
  return (
    <section className={className}>
      <img src={imgSrc} alt={heading} />
      <h3>{heading}</h3>
      <p>{body}</p>
    </section>
  );
};

export default Service;
