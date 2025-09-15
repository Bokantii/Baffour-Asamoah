import React from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import classes from "./About.module.scss";
const About = () => {
  return (
    <main className={classes.aboutSection}>
      <Hero
        url={
          "https://images.unsplash.com/photo-1694299352873-0c29d862e87a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJsYWNrJTIwd29tYW4lMjB0aGVyYXB5fGVufDB8fDB8fHww"
        }
        // url={
        //   "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D"
        // }
        heroText="We believe in listening deeply, honoring every story, and walking with you toward wellness."
      />

      <ProfessionaLInfo reversedFlex>
        <section className={classes.info}>
          <ScrollFadeIn>
            <h2>About Me</h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p>
              I’m <strong>Dr. Baffour Asamoah</strong>, a Registered Social
              Worker and psychotherapist based in Toronto with 16+ years in
              social services.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p>
              I lead <strong>Westcroft Residences Inc.</strong>, a mental health
              group home network, and serve the Toronto District School Board.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p>
              I founded the{" "}
              <strong>Ghanaian Canadian Social Services Network (GCSSN)</strong>{" "}
              to uplift and educate the Ghanaian community.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p>
              My practice is rooted in{" "}
              <strong>anti-oppressive and culturally responsive care</strong>,
              addressing systemic challenges faced by Black populations.
            </p>
          </ScrollFadeIn>
        </section>
      </ProfessionaLInfo>
      <Accordion
        items={[
          {
            title: "Our Values",
            content:
              "At the core of our practice is a deep respect for each client’s unique journey. We are committed to creating a safe, inclusive, and affirming space that honors diversity in all its forms—cultural, gender, sexual, and lived experience. Rooted in compassion, integrity, and a trauma-informed lens, we believe in walking alongside you with empathy, humility, and unwavering support.",
          },

          {
            title: "Therapeutic Approach",
            content:
              "We use a trauma-informed, anti-oppressive framework that centers your lived experiences and strengths.",
          },
          {
            title: "What to Expect in a Session",
            content:
              "Our sessions offer a safe, validating space for you to explore, heal, and grow at your own pace.",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default About;
