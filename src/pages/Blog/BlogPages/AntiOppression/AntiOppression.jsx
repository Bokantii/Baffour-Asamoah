import { useLocation } from "react-router-dom";
import BlogPostPage from "./../../../../components/BlogPostPage/BlogPostPage";
import ScrollFadeIn from './../../../../components/ScrollFadeIn/ScrollFadeIn';
const AntiOppression = () => {
  const location = useLocation();
  const { title, imgSrc } = location.state || {};
  const children = (
      <article>
    <ScrollFadeIn>
      <header>
        <p>
          In a world shaped by systems of inequality, stepping into a helping
          profession like social work demands more than compassion—it demands
          courage, awareness, and a commitment to justice. Anti-oppressive
          practice (AOP) is more than a framework; it’s a mindset that centers
          equity, challenges power imbalances, and empowers marginalized voices.
        </p>
        <p>
          Whether you're a practitioner, client, or someone navigating a system
          that doesn’t always feel fair, understanding AOP can reshape how we
          care for others—and ourselves.
        </p>
      </header>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.1}>
      <section>
        <h2>Why Anti-Oppressive Practice Matters</h2>
        <ul>
          <li>
            <strong>Acknowledges Structural Injustice:</strong>
            Too often, people are made to feel that their struggles are personal
            failings. AOP recognizes that oppression is built into many
            systems—education, healthcare, criminal justice—and impacts how
            individuals experience the world. This approach names those
            structures, rather than placing blame on the individual.
          </li>
          <li>
            <strong>Creates Safer, More Inclusive Spaces:</strong>
            When social workers practice from an anti-oppressive lens, they
            intentionally create environments that affirm a client’s identity.
            Whether that means using inclusive language, recognizing cultural
            context, or acknowledging lived experiences of discrimination, it
            sends a powerful message:{" "}
            <em>You belong here. Your story matters.</em>
          </li>
          <li>
            <strong>Shifts the Power Dynamic:</strong>
            Traditional helping models can position the professional as the
            “expert” and the client as the “receiver.” AOP flips that narrative.
            It sees clients as the experts of their own lives and invites
            collaboration rather than authority. It's about walking beside—not
            ahead of—the people we serve.
          </li>
        </ul>
      </section>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.2}>
      <section>
        <h2>Starting Anti-Oppressive Work Can Feel Overwhelming</h2>
        <p>You might be wondering:</p>
        <ul>
          <li>What if I say the wrong thing?</li>
          <li>Am I doing enough?</li>
          <li>How do I challenge injustice in a system I still work within?</li>
        </ul>
        <p>
          These are valid and necessary questions. The truth is, anti-oppressive
          practice isn’t about being perfect—it’s about being reflective. It’s
          about noticing where our biases show up, who is being excluded, and
          how we can respond with humility and accountability.
        </p>
      </section>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.3}>
      <section>
        <h2>The Power of a Reflective Practitioner</h2>
        <p>
          At the heart of AOP is the belief that{" "}
          <strong>we must do our own internal work</strong> before we can help
          others. This means examining how our identities—race, class, gender,
          education—shape our perspectives and influence our interactions.
        </p>
        <p>A reflective practitioner:</p>
        <ul>
          <li>Asks tough questions</li>
          <li>Listens deeply and without defensiveness</li>
          <li>Takes feedback seriously</li>
          <li>Advocates for justice, even when it's uncomfortable</li>
        </ul>
      </section>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.4}>
      <section>
        <h2>What Anti-Oppressive Practice Looks Like in Real Life</h2>
        <p>
          You don’t need a new job title or a special degree to apply AOP. You
          can start by:
        </p>
        <ul>
          <li>
            Validating a client’s experience with racism or discrimination
            instead of minimizing it
          </li>
          <li>
            Using your privilege (where you have it) to advocate for others in
            meetings or policy discussions
          </li>
          <li>
            Asking clients how they define healing, success, or safety—instead
            of assuming
          </li>
        </ul>
        <p>
          These small shifts make a big difference in building trust and truly
          serving the communities you care about.
        </p>
      </section>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.5}>
      <section>
        <h2>The Takeaway</h2>
        <p>
          Anti-oppressive practice isn’t a checklist—it’s a lifelong journey. It
          asks us to unlearn, relearn, and remain open. It teaches us to see the
          whole person, not just the problem. And it reminds us that healing
          isn’t just about the individual—it’s also about creating a more just
          and compassionate world.
        </p>
        <p>
          If you’re committed to this path, you’re already doing the work. Keep
          going.
        </p>
      </section>
    </ScrollFadeIn>

    <ScrollFadeIn delay={0.6}>
      <footer>
        <h3>Ready to Learn More or Work Together?</h3>
        <p>
          If you're curious about how anti-oppressive practice can deepen your
          personal or professional journey, I offer a free 15-minute
          consultation to explore your goals and see if we’re aligned. No
          pressure—just a space to connect and reflect.
        </p>
      </footer>
    </ScrollFadeIn>
  </article>

  );
  return (
    <>
      <BlogPostPage
        heading={title}
        imgSrc={imgSrc}
        date={new Date().toLocaleDateString("en-US",{
          year:"numeric",
          month:"long",
          day:"numeric"
        })}
      >
        {children}
      </BlogPostPage>
    </>
  );
};

export default AntiOppression;
