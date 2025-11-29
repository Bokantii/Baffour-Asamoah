import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ScrollFadeIn from "../../components/ScrollFadeIn/ScrollFadeIn.jsx";
import classes from "./Events.module.scss";
import { Helmet } from "react-helmet";
import gcaoWomenEvent from "./gcao_women_conference.jpg";
import challengingKeyConversations from "./challenging_key_conversations.jpg";
import healthyFamilySeminar from "./healthy_family_seminar.jpg";
import gcaoWomensWing from "./gcao_women_wing.jpg";
const events = [
  {
    year: 2025,
    title: "GCAO Women’s Wing 4th Annual Conference",
    role: "Panelist",
    theme: "Mental Health and Well-Being: Building Resilient Futures for Women",
    organisation: "Ghanaian-Canadian Association of Ontario (GCAO)",
    date: "October 22, 2025",
    time: "7:30 pm – 9:30 pm (EST)",
    location: "Zoom (Online)",
    image: gcaoWomensWing,
  },
  {
    year: 2025,
    title: "GCAO Town Hall Meeting",
    role: "Panelist",
    theme:
      "Challenging Key Conversations and Interventions: Family Dysfunction, Mental Health, Youth Mortality & Cultural Conflicts",
    organisation: "Ghanaian-Canadian Association of Ontario (GCAO)",
    date: "November 23, 2025",
    time: "7:00 pm – 9:00 pm (EST)",
    location: "Zoom (Online)",
    image: challengingKeyConversations,
  },
  {
    year: 2023,
    title: "GCAO 3rd Annual Women’s Conference",
    role: "Panelist",
    theme:
      "Cultural Expectations and Women’s Empowerment – How intergenerational attitudes towards women’s roles influence empowerment efforts",
    organisation: "GCAO Women’s Wing",
    date: "November 13, 2023",
    time: "7:30 pm",
    location: "Zoom (Online)",
    image: gcaoWomenEvent,
  },
  {
    year: 2017,
    title: "A Healthy Family Seminar 2017",
    role: "Guest Speaker",
    theme: "A Healthy Family Seminar",
    organisation: "Ghanaian-Canadian Social Services Network",
    date: "October 7, 2017",
    time: "6:00 pm – 8:00 pm",
    location: "Living Word Assemblies of God Church, Toronto",
    image: healthyFamilySeminar,
  },
];

const Events = () => {
  return (
    <main className={classes.eventsPage}>
      <Helmet>
        <title>
          Speaking & Past Events | Dr. Baffour Asamoah | Asamoah Associates
        </title>
        <meta
          name="description"
          content="Browse a selection of Dr. Baffour Asamoah’s past conferences, town halls and seminars on mental health, family well-being and community empowerment."
        />
        <link rel="canonical" href="https://www.asamoahassociates.com/events" />
      </Helmet>

      <Hero
        url="https://images.unsplash.com/photo-1624499961691-1930789066bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRvd25oYWxsJTIwbWVldGluZyUyMGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fHww"
        heroText="Dr. Asamoah is a regular speaker at conferences, town halls, and community events"
      />

      <section className={classes.content}>
        <ScrollFadeIn>
          <h1>Speaking & Past Events</h1>
          <p>
            A snapshot of some of the conferences, panels, and seminars where
            Dr. Baffour Asamoah has shared his expertise in psychotherapy, youth
            development, and community mental health.
          </p>
        </ScrollFadeIn>

        <div className={classes.eventsGrid}>
          {events.map((event, index) => (
            <a
              key={index}
              href={event.image}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.eventCard}
            >
              <img
                src={event.image}
                alt={`${event.title} – ${event.theme}`}
                className={classes.flyer}
              />
              <div className={classes.eventBody}>
                <h2>{event.title}</h2>
                <p className={classes.role}>{event.role}</p>
                <p className={classes.meta}>
                  <span>{event.date}</span> · <span>{event.time}</span>
                </p>
                <p className={classes.meta}>{event.location}</p>
                <p className={classes.organisation}>{event.organisation}</p>
                <p className={classes.theme}>{event.theme}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
