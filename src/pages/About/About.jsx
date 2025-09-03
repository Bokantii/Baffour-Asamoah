import React from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
import backgroundImg from "./background.png";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import classes from "./About.module.scss";
const About = () => {
  return (
    <main className={classes.aboutSection}>
      <Hero
        url={backgroundImg}
        heroText="We believe in listening deeply, honoring every story, and walking with you toward wellness."
      />

      <ProfessionaLInfo reversedFlex>
        <section className={classes.info}>
          <h2>About Me</h2>
          <p>
            I’m <strong>Dr. Baffour Asamoah</strong>, a Registered Social Worker
            and psychotherapist based in Toronto with 16+ years in social
            services.
          </p>
          <p>
            I lead <strong>Westcroft Residences Inc.</strong>, a mental health
            group home network, and serve the Toronto District School Board.
          </p>
          <p>
            I founded the{" "}
            <strong>Ghanaian Canadian Social Services Network (GCSSN)</strong>{" "}
            to uplift and educate the Ghanaian community.
          </p>
          <p>
            My practice is rooted in{" "}
            <strong>anti-oppressive and culturally responsive care</strong>,
            addressing systemic challenges faced by Black populations.
          </p>
        </section>
      </ProfessionaLInfo>
      <Accordion
        items={[
          {
            title: "Our Values",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti cum culpa expedita reiciendis quas.",
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
