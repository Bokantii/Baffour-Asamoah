import { useLocation } from "react-router-dom";
import BlogPostPage from "./../../../../components/BlogPostPage/BlogPostPage";
import ScrollFadeIn from './../../../../components/ScrollFadeIn/ScrollFadeIn';

const MentalWellness = () => {
  const location = useLocation();
  const { title, imgSrc } = location.state || {};

  const children = (
    <article>
      <ScrollFadeIn>
        <header>
          <p>
            Mental health is a universal need, yet racialized communities often
            face unique challenges when it comes to accessing and benefiting from
            mental wellness resources. Whether due to stigma, systemic barriers,
            or cultural misunderstandings, the path to healing can be more
            complex—but also deeply powerful when culturally informed support is
            available.
          </p>
        </header>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.1}>
        <section>
          <h2>Why Mental Wellness Looks Different for Racialized Communities</h2>
          <ul>
            <li>
              <strong>Historical and Ongoing Trauma:</strong> Legacies of
              colonialism, racism, and marginalization have created
              intergenerational trauma in many communities. This impacts how
              mental health symptoms present, and how individuals seek support.
            </li>
            <li>
              <strong>Stigma and Cultural Perceptions:</strong> In some cultures,
              mental health is still taboo. Therapy might be seen as a “last
              resort” or something reserved for serious illness, rather than a
              proactive step toward self-care and healing.
            </li>
            <li>
              <strong>Systemic Barriers:</strong> Racialized individuals often
              face discrimination in healthcare settings or struggle to find
              practitioners who understand their lived experiences. This can lead
              to mistrust, misdiagnosis, or lack of care.
            </li>
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <section>
          <h2>Creating Culturally Safe Mental Health Spaces</h2>
          <p>
            Healing happens when individuals feel seen and respected. That’s why
            culturally grounded approaches are vital. This means:
          </p>
          <ul>
            <li>
              Using language that resonates with clients’ identities and
              experiences
            </li>
            <li>
              Valuing the role of spirituality, community, and ancestry in
              wellness
            </li>
            <li>
              Offering services led by practitioners from the same or similar
              backgrounds
            </li>
          </ul>
          <p>It’s not just about inclusion—it’s about belonging.</p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.3}>
        <section>
          <h2>What to Expect in a Culturally Affirming Therapy Session</h2>
          <p>
            Whether you’re new to therapy or returning after a break, working with
            someone who understands the cultural context can make a world of
            difference. In these sessions, you can expect to:
          </p>
          <ul>
            <li>
              Talk openly about the impact of racism, discrimination, or identity
            </li>
            <li>
              Receive validation rather than minimization of your experiences
            </li>
            <li>
              Explore strengths and resilience rooted in culture and heritage
            </li>
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.4}>
        <section>
          <h2>It's Okay to Be Hesitant</h2>
          <p>You might be asking:</p>
          <ul>
            <li>Will this therapist understand me?</li>
            <li>Is therapy really for people like me?</li>
            <li>What if I don’t know how to talk about my feelings?</li>
          </ul>
          <p>
            These questions are normal—and they’re welcome in the therapy room.
            Your experience deserves to be met with empathy, not judgment. And you
            deserve to heal in a way that honors where you come from.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.5}>
        <section>
          <h2>The Takeaway</h2>
          <p>
            Healing in racialized communities is an act of resistance, resilience,
            and restoration. It’s about reclaiming wellness in a world that
            doesn’t always make it easy. Whether you’re just beginning to explore
            your mental health or have been on the journey for a while, know this:
          </p>
          <p>
            <strong>
              You are not alone. Your experience is valid. And support is
              available—on your terms.
            </strong>
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.6}>
        <footer>
          <h3>Let’s Take the First Step Together</h3>
          <p>
            If you’re ready to explore therapy in a space that affirms who you
            are, I offer a free 15-minute consultation. It’s a chance to ask
            questions, share your concerns, and see if we’re a good match—no
            pressure, just possibility.
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

export default MentalWellness;
