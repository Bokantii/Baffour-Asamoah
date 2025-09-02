import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import logo1 from "./logo2.jpeg";
const Header = ({ darkText }) => {
  const color = darkText ? "black" : "#ffffff";
  const logo = darkText ? (
    <img src={logo1} alt="logo" style={{ width: "100px", height: "100px" }}></img>
  ) : (
    "Asamoah and Associates Inc."
  );
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.homeLink} style={{ color: color }}>
        Asamoah and Associates Inc.
      </Link>
      <ul style={{ color: color }}>
        <li>
          <Link to="/about" className={classes.link} style={{ color: color }}>
            about us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={classes.link}
            style={{ color: color }}
          >
            services
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link} style={{ color: color }}>
            blog
          </Link>
        </li>
        <li>
          <Link to="/faqs" className={classes.link} style={{ color: color }}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.link} style={{ color: color }}>
            contact
          </Link>
        </li>
      </ul>
      <div></div>
    </header>
  );
};

export default Header;
