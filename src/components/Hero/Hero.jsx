import React from "react";
import Header from "../../components/Header/Header.jsx";
import classes from "./Hero.module.scss";

const Hero = ({ children, url }) => {
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
      {children}
    </section>
  );
};

export default Hero;
