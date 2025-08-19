import React from "react";
import classes from "./ProfessionaLInfo.module.scss";
import baffour from "./Baffpour_updated.png";
const ProfessionaLInfo = ({ children, reversedFlex }) => {
  const flexDirectionB = reversedFlex ? "row-reverse" : "row";
  return (
    <section className={classes.introContainer}>
      <section
        className={classes.intro}
        style={{
          flexDirection: flexDirectionB,
        }}
      >
        <img src={baffour} alt="Dr. Baffour smiling image" />
        {children}
      </section>
    </section>
  );
};

export default ProfessionaLInfo;
