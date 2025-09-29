import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import classes from "./Services.module.scss";
import Service from "../../components/Service/Service.jsx";
import Button from "../../components/Button/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
import ScrollSlideRight from "./../../components/ScrollSlideRight/ScrollSlideRight";
const Services = () => {
  const myActivity = [
    {
      id: 1,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Couples Counseling",
      description:
        "Helping couples build stronger connections and resolve relationship challenges.",
      image:
        "https://images.unsplash.com/photo-1637245048732-adf1a547835e?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <main className={classes.services}>
      <Hero
        url="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=800&auto=format&fit=crop&q=60"
        heroText="Compassionate care tailored to your mental wellness journey."
      />

      {/* Service list */}
      <section className={classes.serviceList}>
        <ScrollFadeIn>
          {" "}
          <section className={classes.service_content}>
            {myActivity.map((activity) => (
              <Service
                altClassName
                key={activity.id}
                imgSrc={activity.image}
                heading={activity.title}
                body={activity.description}
                width={"100%"}
              />
            ))}
          </section>
        </ScrollFadeIn>

        <p className={classes.ctaBtn}>
          <Button href="/contact">Book a Consultation</Button>
        </p>
      </section>

      {/* What to Expect */}

      <section className={classes.offerings_section}>
        <ScrollFadeIn>
          <section className={classes.offerings_image_section}>
            <img
              src="https://plus.unsplash.com/premium_photo-1665990294609-10c594d94614?w=800&auto=format&fit=crop&q=60"
              alt="offering"
              className={classes.offerings_image}
            />

            <section className={classes.offerings_text}>
              <h3>What to Expect</h3>
              <ul className={classes.offerings}>
                <li className={classes.offering}>
                  We offer a free 15-minute phone consultation to understand
                  your needs and how we can best support you.
                </li>
                <li className={classes.offering}>
                  Each session with Dr. Baffour lasts 50 minutes and is held
                  online or in-person upon request.
                </li>
              </ul>
            </section>
          </section>
        </ScrollFadeIn>
      </section>

      {/* CTA */}
      <section className={classes.ctaSection}>
        <p className={classes.ctaText}>
          <ScrollFadeIn>
            <span>Still exploring your options?</span>
            <br />
            <Link to="/contact" className={classes.ctaLink}>
              We’re here to help
            </Link>
          </ScrollFadeIn>
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
