import React from "react";
import classes from "./BlogPostPage.module.scss";
import Header from "./../Header/Header";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
import Footer from "./../Footer/Footer";

// A component that defines a UI template for each blog page to follow as the reader clicks 'read more' from the Blog Page
const BlogPostPage = ({ heading, imgSrc, date, children }) => {
  return (
    <>
      <main className={classes.blogPostPageContainer}>
        <Header darkText />
        <ScrollFadeIn>
          <section className={classes.blogPostPage}>
            <section className={classes.blogPostPageContent}>
              <h1>{heading}</h1>
              <img src={imgSrc} alt="Blog Image" />
              <p className={classes.date}>{date}</p>
              {children}
            </section>
          </section>
        </ScrollFadeIn>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
