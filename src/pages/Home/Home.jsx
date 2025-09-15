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
import family from './familyUpdated.jpeg';
import Service from "../../components/Service/Service.jsx";

const Home = () => {
  const myActivity = [
  {
    id: 1,
    title: "Cognitive Behavioral Therapy (CBT)",
    description:
      "Evidence-based sessions to help individuals identify and change negative thinking patterns and behaviors.",
    image:
      "https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Trauma-Informed Counseling",
    description:
      "Safe and supportive therapy for clients dealing with past trauma, PTSD, or emotionally distressing experiences.",
    image:
      "https://plus.unsplash.com/premium_photo-1665990292585-6a39c5229bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Family & Relationship Therapy",
    description:
      "Facilitated sessions designed to resolve conflict, strengthen communication, and rebuild trust in relationships.",
    image:
      "https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlcmFweSUyMHNlc3Npb258ZW58MHx8MHx8fDA%3D",
  },
];

  return (
    <main className={classes.home}>
      <Hero
        url={
          family
        }
        // url={
        //   "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D"
        // }
        alternate
      >
        <main>
          <h1 className={classes.heading}>
            <ScrollFadeIn>
              empowering healing through culture,care{" "}
              <span style={{ textTransform: "lowercase" }}>and</span> clinical
              excellence
            </ScrollFadeIn>
          </h1>
          <p className={classes.subHeading}>
            Psychotherapy | Social Work | Mental Advocacy
          </p>
        </main>

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
            <p style={{ marginTop: "1rem" }} className={classes.buttonContainer}>
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
          "https://images.unsplash.com/photo-1507667522877-ad03f0c7b0e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMGRhcmt8ZW58MHx8MHx8fDA%3D"
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
