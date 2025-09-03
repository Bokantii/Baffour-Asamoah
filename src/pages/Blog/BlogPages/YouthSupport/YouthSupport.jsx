import { useLocation } from "react-router-dom";
import BlogPostPage from "./../../../../components/BlogPostPage/BlogPostPage";
import ScrollFadeIn from './../../../../components/ScrollFadeIn/ScrollFadeIn';

const YouthSupport = () => {
  const location = useLocation();
  const { title, imgSrc } = location.state || {};

  const children = (
    <article>
      <ScrollFadeIn>
        <header>
          <p>
            Adolescence can be one of the most critical—and challenging—phases in
            a young person’s life. For youth navigating identity, peer pressure,
            academic stress, family struggles, and mental health issues, school is
            more than a place of learning—it can be a lifeline. That’s where
            school-based social work steps in.
          </p>
        </header>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.1}>
        <section>
          <h2>Why Schools Are a Crucial Access Point</h2>
          <p>
            Many young people may never walk into a therapy office. But they do
            show up at school. Embedding social work support directly into
            educational environments removes barriers to access, offering students
            the help they need—right where they already are.
          </p>
          <p>
            Whether it’s through one-on-one counselling, group programs, or
            classroom interventions, school social work provides timely and
            relevant support that fits seamlessly into a student’s world.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <section>
          <h2>The Impact of Early Intervention</h2>
          <p>
            Early support can change the course of a young person’s life.
            School-based social workers are trained to notice warning
            signs—anxiety, depression, isolation, anger, or trauma
            responses—before they escalate into crisis. With the right guidance,
            students can learn coping skills, build resilience, and reconnect with
            their strengths.
          </p>
          <ul>
            <li>Support during family breakdowns or housing instability</li>
            <li>Guidance for students dealing with bullying or peer conflict</li>
            <li>Safe space for LGBTQ+ youth to express identity</li>
            <li>Help navigating cultural challenges or systemic barriers</li>
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.3}>
        <section>
          <h2>Collaboration Is Key</h2>
          <p>
            School social work isn’t done in isolation—it’s a team effort. Social
            workers collaborate with teachers, administrators, parents, and
            community services to create a holistic support system for each
            student. The goal? A learning environment where every youth feels
            safe, seen, and supported.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.4}>
        <section>
          <h2>It’s Okay If a Student Doesn’t Open Up Right Away</h2>
          <p>
            Building trust takes time, especially with youth who’ve experienced
            trauma or discrimination. A school social worker offers consistent
            presence, empathy, and patience—often becoming the first adult a
            student feels truly understood by.
          </p>
          <p>
            Even a single conversation can plant a seed of hope that grows into
            transformation.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.5}>
        <section>
          <h2>The Takeaway</h2>
          <p>
            School-based social work changes lives. It meets youth where they
            are—emotionally and physically—and helps them navigate the journey
            toward mental wellness, identity formation, and personal empowerment.
          </p>
          <p>
            If you're a parent, educator, or school leader curious about
            implementing or strengthening school-based support systems, let’s
            connect. Together, we can ensure every student has the opportunity to
            thrive—both in and beyond the classroom.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.6}>
        <footer>
          <h3>Want to Learn More?</h3>
          <p>
            I offer consultations and training for schools and educators
            interested in trauma-informed, anti-oppressive, and youth-centered
            approaches. Reach out to explore how we can build supportive spaces
            for the next generation.
          </p>
        </footer>
      </ScrollFadeIn>
    </article>
  );

  return (
    <BlogPostPage
      heading={title}
      imgSrc={imgSrc}
      date={new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    >
      {children}
    </BlogPostPage>
  );
};

export default YouthSupport;
