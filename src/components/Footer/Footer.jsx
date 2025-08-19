import React from "react";
import classes from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
        <p>&copy; {new Date().getFullYear()} Westcroft Residences Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
