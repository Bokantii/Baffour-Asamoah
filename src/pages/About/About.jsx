import React from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import classes from "./About.module.scss";
const About = () => {
  return (
    <main className={classes.aboutSection}>
      <Hero
        url={
          "https://plus.unsplash.com/premium_photo-1665990292585-6a39c5229bc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudGFsJTIwaGVhbHRoJTIwdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D"
        }
      >
        <section className={classes.heroContent}>
          <p className={classes.heroText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </section>
      </Hero>
      <ProfessionaLInfo reversedFlex>
        <section className={classes.info}>
          <h2>About Me</h2>
          <p>
            Hello, I’m <strong>Dr. Baffour Asamoah</strong>, a Registered Social
            Worker, psychotherapist, and mental health clinician based in
            Toronto, Ontario, Canada. With over 16 years of experience in the
            social services sector, I’ve had the privilege of supporting
            individuals, families, and communities on their journey toward
            healing and empowerment.
          </p>
          <p>
            I serve as the
            <strong>
              Clinical Director and owner of Westcroft Residences Inc.
            </strong>
            , a private adult mental health group home and supportive housing
            network operating across Scarborough and the Durham Region. In
            addition to my private practice, I work as a
            <strong>School Social Worker and Attendance Counselor</strong> with
            the Toronto District School Board, supporting students and families
            within our school communities.
          </p>
          <p>
            I am also the
            <strong>
              founder of the Ghanaian Canadian Social Services Network (GCSSN)
            </strong>
            — a multidisciplinary group that advocates for and educates the
            Ghanaian community on social and mental health issues. My work
            through GCSSN allows me to connect with other professionals and
            build culturally grounded support systems.
          </p>
          <p>
            Over the years, I’ve worked with a variety of organizations that
            have helped shape my understanding of the systemic gaps faced by
            racialized and Black populations. As a result, I approach my
            practice through a
            <strong>culturally responsive and anti-oppressive lens</strong>,
            focusing on:
          </p>
          {/* <ul>
          <li>Anti-Black Racism</li>
          <li>Systemic Discrimination</li>
          <li>Trauma & Intergenerational Trauma</li>
          <li>Imposter Syndrome</li>
          <li>Mental Health Advocacy</li>
        </ul>
        <p>
          My goal is always to provide a safe, validating, and growth-centered
          space where individuals can explore their experiences, embrace their
          stories, and build capacity over their mental wellness. Whether I’m
          working in a clinical setting, school, or community space, I bring a
          <strong> direct, compassionate approach</strong> that invites
          connection and lasting transformation.
        </p>
        <p>
          If you’re ready to begin your journey, I’d be honored to walk
          alongside you.
        </p> */}
        </section>
      </ProfessionaLInfo>
      <Accordion>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Accordion>

      <Footer />
    </main>
  );
};

export default About;
