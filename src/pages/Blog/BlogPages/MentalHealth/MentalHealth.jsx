import { useLocation } from "react-router-dom";
import BlogPostPage from "./../../../../components/BlogPostPage/BlogPostPage";
import ScrollFadeIn from './../../../../components/ScrollFadeIn/ScrollFadeIn';

const MentalHealth = () => {
  const location = useLocation();
  const { title, imgSrc } = location.state || {};

  const children = (
    <article>
      <ScrollFadeIn>
        <header>
          <p>
            Mental health is just as vital as physical health—but for many
            racialized communities, accessing supportive, culturally relevant
            mental health care can be a struggle. Generational trauma, systemic
            barriers, and cultural stigma often create silence around mental
            wellness. It's time to change that.
          </p>
        </header>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.1}>
        <section>
          <h2>Breaking the Silence Around Mental Health</h2>
          <p>
            In many communities of color, mental health concerns are misunderstood
            or minimized. Seeking help may be seen as weakness, or worse—shameful.
            But mental health challenges don’t discriminate. Depression, anxiety,
            trauma, and stress affect people of all races, backgrounds, and walks
            of life.
          </p>
          <p>
            We all deserve spaces where we can speak openly, be seen fully, and
            find healing without judgment. Breaking the silence is the first step
            toward that reality.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.2}>
        <section>
          <h2>Recognizing the Impact of Systemic Oppression</h2>
          <p>
            Racism, microaggressions, and intergenerational trauma have a
            cumulative impact on mental well-being. Racialized individuals often
            carry the weight of societal expectations while navigating
            under-resourced systems. Therapy that ignores these realities fails to
            meet clients where they are.
          </p>
          <p>
            Mental wellness isn't just about individual resilience—it's also about
            creating environments that support safety, dignity, and cultural
            affirmation.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.3}>
        <section>
          <h2>The Power of Culturally Responsive Therapy</h2>
          <p>
            Healing requires context. A culturally responsive therapist
            understands that your identity matters. They recognize the unique
            stressors you face, honor your lived experience, and center your voice
            in the therapeutic journey.
          </p>
          <p>
            Whether you're exploring identity, unpacking trauma, or processing
            burnout, therapy should empower you—not pathologize your experience.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.4}>
        <section>
          <h2>It’s Okay to Seek Help</h2>
          <p>
            If you’ve ever questioned whether your pain is valid, felt pressure to
            “just be strong,” or stayed silent to avoid being misunderstood—you’re
            not alone. Seeking therapy is not a sign of weakness. It’s an act of
            courage and self-respect.
          </p>
          <p>
            You deserve to feel supported. You deserve to heal. And you don’t have
            to do it alone.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.5}>
        <section>
          <h2>What You Can Expect</h2>
          <p>Therapy is your space to:</p>
          <ul>
            <li>Process your thoughts and emotions at your own pace</li>
            <li>Explore your cultural identity and its impact on your life</li>
            <li>Heal from trauma, both past and present</li>
            <li>Develop practical tools to manage stress and anxiety</li>
          </ul>
          <p>
            It’s not about being “fixed”—it’s about being heard, seen, and
            supported.
          </p>
        </section>
      </ScrollFadeIn>

      <ScrollFadeIn delay={0.6}>
        <footer>
          <h3>Take the First Step</h3>
          <p>
            If you’re ready to explore your mental health in a space that affirms
            who you are, I offer a free 15-minute consultation. No pressure—just a
            conversation to see how I can support you on your journey toward
            wellness.
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

export default MentalHealth;
