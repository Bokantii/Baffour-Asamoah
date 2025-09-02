import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import baffour from "./Baffpour_updated.png";
import Button from "../../components/Button/Button.jsx";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
// import myActivity from "./activity.js";
import Service from "../../components/Service/Service.jsx";
import backgroundImg from "./background.png";
const Home = () => {
  const myActivity = [
    {
      id: 1,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://plus.unsplash.com/premium_photo-1665990292585-6a39c5229bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://images.unsplash.com/photo-1743767588082-e754fc9874be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhaW4lMjB0aGVyYXB5fGVufDB8fDB8fHww",
    },
  ];

  return (
    <main className={classes.home}>
      <Hero url={backgroundImg} alternate>
        <ScrollFadeIn>
          <main>
            <h1 className={classes.heading}>
              empowering healing through culture,care{" "}
              <span style={{ textTransform: "lowercase" }}>and</span> clinical
              excellence
            </h1>
            <p className={classes.subHeading}>
              Psychotherapy | Social Work | Mental Advocacy
            </p>
          </main>
        </ScrollFadeIn>

        <Link to="/contact" className={classes.cta}>
          Book a Consultation
        </Link>
      </Hero>

      <section className={classes.approach}>
        <section className={classes.approach_body}>
          <ScrollFadeIn>
            <h2 className={classes.approach_heading}>Our Approach</h2>
          </ScrollFadeIn>

          <p className={classes.approach_content}>
            <ScrollFadeIn>
              We offer a compassionate and culturally grounded space where
              individuals feel heard, supported, and empowered. Our
              trauma-informed practice prioritizes dignity and safety,
              especially for racialized and marginalized communities in Ontario.
              Using evidence-based approaches like
              <strong>Cognitive Behavioural Therapy (CBT)</strong> and
              <strong> Narrative Therapy</strong>, we tailor sessions to each
              person's story. We center lived experiences shaped by systemic
              oppression, anti-Black racism, and intergenerational trauma. Our
              goal is to walk beside our clients with empathy, professionalism,
              and cultural sensitivity throughout their healing journey.
            </ScrollFadeIn>
          </p>
          <Link className={classes.cta}>Learn More</Link>
        </section>
      </section>
      <ScrollFadeIn>
        <ProfessionaLInfo>
          <section className={classes.intro_body}>
            <p className={classes.intro_body_heading}>
              A Healing Space Rooted in Respect
            </p>
            <p className={classes.intro_body_content}>
              Dr. Baffour Asamoah (PhD, RSW) is a dedicated clinician with over
              16 years of experience in psychotherapy, mental health advocacy,
              and culturally grounded care. He specializes in trauma-informed
              approaches, including Cognitive Behavioural Therapy (CBT) and
              Narrative Therapy, supporting individuals affected by systemic
              barriers and intergenerational trauma.
            </p>
            <p style={{ marginTop: "1rem" }}>
              <Button href="/about">Meet Dr. Baffour</Button>
            </p>
          </section>
        </ProfessionaLInfo>
      </ScrollFadeIn>

      {/* services offered */}
      <section className={classes.services}>
        <section className={classes.service_content}>
          {myActivity.map((activity) => {
            return (
              <Service
                key={activity.id}
                imgSrc={activity.image}
                heading={activity.title}
                body={activity.description}
                width={"30%"}
              />
            );
          })}
        </section>
        <p className={classes.buttonContainer}>
          <ScrollFadeIn>
            <Button href="/services">Explore our services</Button>
          </ScrollFadeIn>
        </p>
      </section>

      <BackgroundImage
        url={
          "https://images.unsplash.com/photo-1693703276057-c2d7d9b88b23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpbmluZyUyMGxpZ2h0fGVufDB8fDB8fHww"
        }
      >
        <section className={classes.backgroundImg_content}>
          <p className={classes.client_testimonial}>
            <ScrollFadeIn>
              "Working with Dr. Baffour has been life-changing. He created a
              safe space where I felt truly seen and understood for the first
              time. His compassionate approach and practical strategies have
              helped me regain confidence and find clarity in my journey toward
              healing."
            </ScrollFadeIn>
          </p>
          <p className={classes.clientName}>— Sarah M.</p>
        </section>
      </BackgroundImage>

      <section className={classes.consultation}>
        <p>
          <ScrollFadeIn>
            Begin your healing journey with Dr. Baffour
          </ScrollFadeIn>{" "}
        </p>
        <Button href={"/contact"}>Book a consultation</Button>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
