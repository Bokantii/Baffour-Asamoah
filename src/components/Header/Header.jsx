import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.homeLink}>
        Westcroft Residences Inc.
      </Link>
      <ul>
        <li>
          <Link to="/about" className={classes.link}>
            about us
          </Link>
        </li>
        <li>
          <Link to="/services" className={classes.link}>
            services
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link}>
            blog
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.link}>
            contact
          </Link>
        </li>
      </ul>
      <div></div>
    </header>
  );
};

export default Header;
