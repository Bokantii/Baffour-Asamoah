import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import classes from "./Header.module.scss";
import logo1 from "./logo_white_new.png";
import logo2 from "./logo_black_new.png";

const Header = ({ darkText }) => {
  const color = darkText ? "black" : "#ffffff";
  const [isOpen, setOpen] = useState(false);
  const burgerColor = isOpen ? "#565254" : "#ffffff";
  const darkBurgerColor = isOpen ? "#565254" : "black";
  const actualBurgerColor = darkText ? darkBurgerColor : burgerColor;
  const logo = darkText ? logo2 : logo1;
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.homeLink} style={{ color }}>
        <img src={logo} alt="" className={classes.logoImg}/>
      </Link>

      {/* Desktop Nav */}
      <ul style={{ color }}>
        <li>
          <Link to="/about" className={classes.link} style={{ color }}>
            about us
          </Link>
        </li>
        <li>
          <Link to="/services" className={classes.link} style={{ color }}>
            services
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link} style={{ color }}>
            blog
          </Link>
        </li>
        <li>
          <Link to="/faqs" className={classes.link} style={{ color }}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.link} style={{ color }}>
            contact
          </Link>
        </li>
        <li>
          <Link to="/events" className={classes.link} style={{ color }}>
            events
          </Link>
        </li>
      </ul>

      {/* Hamburger icon */}
      <div
        className={classes.hamburgerMenu}
        style={{ color: actualBurgerColor }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen && (
        <div className={classes.mobileOverlay}>
          <nav className={classes.overlayNav}>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link to="/faqs" onClick={() => setOpen(false)}>
              FAQs
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link to="/events" onClick={() => setOpen(false)}>
              Events
            </Link>
          </nav>
        </div>
      )}

      
    </header>
  );
};

export default Header;
