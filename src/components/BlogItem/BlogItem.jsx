import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlogItem.module.scss";

const BlogItem = ({ imgSrc, title, href, alt }) => {
  return (
    <section className={classes.blogItem}>
      <img src={imgSrc} alt={alt} />
      <p className={classes.title}>{title}</p>
      <Link to={href} state={{ title, imgSrc }}>
        Read More
      </Link>
    </section>
  );
};

export default BlogItem;
