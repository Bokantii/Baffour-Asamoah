import React from "react";
import classes from './BackgroundImage.module.scss';
const BackgroundImage = ({ url, children }) => {
  return (
    <main
      style={{
        backgroundImage: `url(${url})`,
        
        
      }}
      className={classes.bgImage}
    >
      {children}
    </main>
  );
};

export default BackgroundImage;
