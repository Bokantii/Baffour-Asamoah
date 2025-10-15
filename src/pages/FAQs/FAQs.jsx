import React from "react";
import classes from "./FAQs.module.scss";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "./../../components/Accordion/Accordion";
const FAQs = () => {
  return (
    <main className={classes.faqSection}>
      <Hero
        url={
          "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        }
        heroText="Frequently Asked Questions"
      />

      <section className={classes.questions}>
        <Accordion
          items={[
            {
              title: "What should I expect in my first session?",
              content:
                "Your first session will focus on understanding your story, goals, and any concerns you may have. It’s safe a space for building trust and clarity, not pressure.",
            },
            {
              title: "How long is each therapy session?",
              content:
                "Sessions typically run for 50 minutes. Longer or extended sessions can be arranged depending on your specific needs.",
            },
            {
              title: "Do you offer virtual or in-person therapy?",
              content:
                "Yes, we offer both virtual (via secure video) and in-person sessions at our GTA offices to accommodate your preference and comfort.",
            },
            {
              title: "Is everything I share confidential?",
              content:
                "Absolutely. Confidentiality is a cornerstone of our practice. Your privacy is respected and protected, with only rare exceptions required by law.",
            },
            {
              title: "What therapeutic methods do you use?",
              content:
                "We draw from trauma-informed, anti-oppressive, and strength-based approaches like CBT, narrative therapy, and mindfulness depending on your needs.",
            },
            {
              title: "Do you work with youth or families?",
              content:
                "Yes, we work with individuals, youth, and families navigating complex emotional, mental health, and identity-related challenges.",
            },
            {
              title: "How do I book an appointment?",
              content:
                "Simply head to our 'Get Started' page, fill out the brief intake form, and we’ll get back to you within 24 hours to schedule your first session.",
            },
          ]}
        />
      </section>
      <Footer />
    </main>
  );
};

export default FAQs;
