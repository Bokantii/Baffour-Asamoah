import React from "react";
import Header from "../../components/Header/Header.jsx";
import classes from "./Hero.module.scss";
import ScrollFadeIn from "./../ScrollFadeIn/ScrollFadeIn";
const Hero = ({ children, url, heroText, alternate }) => {
  const heroContentVal = alternate ? null : (
    <section className={classes.heroContent}>
      <p className={classes.heroText}>
        <ScrollFadeIn>{heroText}</ScrollFadeIn>
      </p>
    </section>
  );
  return (
    <section
      className={classes.hero}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      {/* <section className={classes.heroContent}>
        <p className={classes.heroText}>
          {heroText}
        </p>
      </section> */}
      {heroContentVal}
      {children}
    </section>
  );
};

export default Hero;
