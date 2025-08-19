import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import baffour from "./Baffpour_updated.png";
import Button from "../../components/Button/Button.jsx";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProfessionaLInfo from "../../components/ProfessionaLInfo/ProfessionaLInfo.jsx";
// import myActivity from "./activity.js";
import Service from "../../components/Service/Service.jsx";
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
      id: 1,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://plus.unsplash.com/premium_photo-1665990292585-6a39c5229bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      title: "Individual Therapy",
      description:
        "Personalized therapy sessions to address individual mental health needs.",
      image:
        "https://images.unsplash.com/photo-1637245048732-adf1a547835e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <main className={classes.home}>
      <Hero
        url={
          "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D"
        }
      >
        <main>
          <h1 className={classes.heading}>
            empowering healing through culture,care and clinical excellence
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
          <h2 className={classes.approach_heading}>Our Approach</h2>
          <p className={classes.approach_content}>
            We offer a compassionate and culturally grounded space where
            individuals feel heard, supported, and empowered. Our practice is
            rooted in dignity and safety, especially for racialized and
            marginalized populations in Ontario. Through a trauma-informed lens,
            we use evidence-based therapies tailored to each person’s story and
            goals. We draw from approaches like{" "}
            <strong>Cognitive Behavioural Therapy (CBT)</strong> and{" "}
            <strong>Narrative Therapy</strong>, while centering the lived
            experiences of those affected by systemic oppression, anti-Black
            racism, and intergenerational trauma. Our mission is to walk
            alongside our clients with empathy and professionalism as they
            navigate their healing journey.
          </p>
          <Link className={classes.cta}>Learn More</Link>
        </section>
      </section>
      <ProfessionaLInfo>
         <section className={classes.intro_body}>
          <p className={classes.intro_body_heading}>
            A Healing Space Rooted in Respect
          </p>
          <p className={classes.intro_body_content}>
            Dr. Baffour Asamoah (PhD, RSW) is a dedicated clinician with over 16
            years of experience in psychotherapy, mental health advocacy, and
            culturally grounded care. He specializes in trauma-informed
            approaches, including Cognitive Behavioural Therapy (CBT) and
            Narrative Therapy, supporting individuals affected by systemic
            barriers and intergenerational trauma.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <Button href="/about">Meet Dr. Baffour</Button>
          </p>
        </section>
      </ProfessionaLInfo>
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
        <p style={{ textAlign: "center", width: "50%", marginTop: "2rem" }}>
          <Button href="/services">Explore our services</Button>
        </p>
      </section>
      <BackgroundImage
        url={
          "https://plus.unsplash.com/premium_photo-1672292536317-ac723dd16d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoZXJhcHl8ZW58MHx8MHx8fDA%3D"
        }
      >
        <section className={classes.backgroundImg_content}>
          <p className={classes.client_testimonial}>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            provident, alias libero placeat, vel fuga sint vero nesciunt, cum
            adipisci id quod. Similique, expedita quibusdam! Quod reiciendis eum
            commodi veritatis?"
          </p>
          <p className={classes.clientName}>Client</p>
        </section>
      </BackgroundImage>
      <section className={classes.consultation}>
        <p>Begin your healing journey with Dr. Baffour</p>
        <Button href={"/contact"}>Book a consultation</Button>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
