import React from "react";
import classes from "./ProfessionaLInfo.module.scss";
import baffour from "./NENE2993.png";
import ScrollFadeIn from "./../ScrollFadeIn/ScrollFadeIn";
const ProfessionaLInfo = ({ children, reversedFlex }) => {
  const flexDirectionB = reversedFlex ? "row-reverse" : "row";
  return (
    <section
      className={classes.introContainer}
    >
      <section className={classes.intro}>
        <img
          src={baffour}
          alt="Dr. Baffour smiling,wearing a navy suit and white inner shirt"
        />

        {children}
      </section>
    </section>
  );
};

export default ProfessionaLInfo;
