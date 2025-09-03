import React from "react";
import Header from "../../components/Header/Header.jsx";
import BlogItem from "../../components/BlogItem/BlogItem.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import classes from "./Blog.module.scss";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
const Blog = () => {
  const blogItems = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Understanding Mental Wellness in Racialized Communities",
      href: "/blog/mental-wellness",
      alt: "",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
      title: "The Role of Anti-Oppressive Practice in Social Work",
      href: "/blog/anti-oppression",
      alt: "",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
      title: "Navigating Intergenerational Trauma in Families",
      href: "/blog/trauma",
      alt: "",
    },
    {
      id: 4,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1664378617213-55fc3392600d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
      title: "Building Culturally Grounded Mental Health Services",
      href: "/blog/mental-health",
      alt: "",
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1616740793717-0aca29b92221?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
      title: "Supporting Youth Through School-Based Social Work",
      href: "/blog/youth-support",
      alt: "",
    },
  ];

  return (
    <>
      <main className={classes.blog}>
        <Header darkText />{" "}
        <ScrollFadeIn>
          <section className={classes.blogItems}>
            {blogItems.map((blogItem) => (
              <BlogItem
                key={blogItem.id}
                imgSrc={blogItem.imgSrc}
                title={blogItem.title}
                href={blogItem.href}
                alt={blogItem.alt}
              />
            ))}
          </section>
        </ScrollFadeIn>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
