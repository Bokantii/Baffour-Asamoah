import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import ScrollFadeIn from "./../ScrollFadeIn/ScrollFadeIn";
const Footer = ({ alternate }) => {
  const marginTop = alternate ? "6rem" : "0";
  return (
    <footer className={classes.footer} style={{ marginTop: marginTop }}>
      <ScrollFadeIn>
        <section className={classes.leftSection}>
          <blockquote>
            <p>
              <em>"Healing isn’t about erasing your past—</em>
            </p>
            <p>
              <em>It’s about learning to live with it, grow through it,</em>
            </p>
            <p>
              <em>and discover the strength you never knew you had."</em>
            </p>
          </blockquote>

          <p className={classes.copyright}>
            &copy; {new Date().getFullYear()} Asamoah & Associates Inc. All
            rights reserved.
          </p>
        </section>
      </ScrollFadeIn>
      {/* socials */}

      <ScrollFadeIn>
        <section className={classes.socials}>
          <p>Stay in touch</p>
          <section className={classes.socials_icon}>
            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/dr-baffour-asamoah-37333538?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className={classes.linkedinIcon}
              />
            </Link>

            {/* Email */}
            <a href="mailto:asamoah.associates@ymail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className={classes.linkedinIcon}
              />
            </a>
          </section>
        </section>
      </ScrollFadeIn>

      {/* links */}
      <ScrollFadeIn>
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
            <Link to="/faqs" className={classes.link}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.link}>
              contact
            </Link>
          </li>
          <li>
            <Link to="/events" className={classes.link}>
              events
            </Link>
          </li>
        </ul>
      </ScrollFadeIn>
    </footer>
  );
};

export default Footer;
