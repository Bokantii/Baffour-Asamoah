import React from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import classes from "./About.module.scss";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main className={classes.aboutSection}>
      <Helmet>
        <title>
          About Asamoah Associates | Our Mission to Build Healthier Minds &
          Communities
        </title>
        <meta
          name="description"
          content="Learn about Dr. Baffour Asamoah and our mission to make therapy accessible, inclusive, and life-changing. Our team brings years of experience in counselling and youth development."
        />
      </Helmet>
      <Hero
        url={
          "https://images.unsplash.com/photo-1694299352873-0c29d862e87a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJsYWNrJTIwd29tYW4lMjB0aGVyYXB5fGVufDB8fDB8fHww"
        }
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
              Worker, Psychotherapist, and Mental Health Clinician based in
              Toronto, Ontario. I have over 16 years of experience in the social
              services sector, with a strong focus on therapy, mental health,
              and well-being.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              I am the Owner and Clinical Director of{" "}
              <strong>Westcroft Residences Inc.</strong>, a private adult mental
              health and supportive housing organization serving clients across
              the Greater Toronto Area (GTA).
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              I have extensive experience as a Registered Social Worker in the
              education sector and have dedicated much of my career to
              supporting individuals through psychotherapy and clinical
              assessments in private practice.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              Beyond my clinical work, I have a strong history of volunteering
              and helping to establish community initiatives and organizations
              that support marginalized and immigrant populations. My work
              continues to focus on empowering communities, improving access to
              mental health resources, and fostering social inclusion.
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <p>
              My practice is rooted in{" "}
              <strong>anti-oppressive and culturally responsive care</strong>,
              addressing systemic barriers and promoting healing through
              compassion, empowerment, and self-awareness.
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
