import { useLocation } from "react-router-dom";
import BlogPostPage from "./../../../../components/BlogPostPage/BlogPostPage";

const Trauma = () => {
  const location = useLocation();
  const { title, imgSrc } = location.state || {};
  const children = (
    <article>
      <header>
        <p>
          Trauma doesn't always start with us—but it can be passed down to us.
          Intergenerational trauma refers to the transmission of emotional pain,
          fear, and coping mechanisms from one generation to the next. And while
          this kind of inherited pain can feel overwhelming, understanding its
          origins is the first step toward healing—for you and future
          generations.
        </p>
      </header>

      <section>
        <h2>What Is Intergenerational Trauma?</h2>
        <p>
          Intergenerational trauma occurs when the effects of a traumatic
          experience—like war, displacement, racism, abuse, or systemic
          oppression—are transferred from parents to children, often without
          anyone realizing it.
        </p>
        <p>It may show up as:</p>
        <ul>
          <li>Persistent anxiety or fear without clear cause</li>
          <li>Emotional detachment or difficulty trusting others</li>
          <li>Repeating unhealthy patterns in relationships</li>
          <li>A sense of guilt, shame, or burden that feels inherited</li>
        </ul>
      </section>

      <section>
        <h2>How Families Carry Trauma</h2>
        <p>
          Families pass down more than genes—they pass down stories, behaviors,
          and ways of responding to the world. When trauma remains unspoken or
          unresolved, it can take root in the family system through silence,
          secrecy, or survival behaviors like hyper-independence or emotional
          numbing.
        </p>
        <p>
          Children often internalize these patterns, even if they don’t fully
          understand them. Without intervention, the cycle can continue.
        </p>
      </section>

      <section>
        <h2>Breaking the Cycle with Awareness and Support</h2>
        <p>
          Healing intergenerational trauma doesn’t mean blaming previous
          generations—it means honoring their survival while choosing a new path
          forward. Therapy can help by:
        </p>
        <ul>
          <li>Exploring your family history with compassion and curiosity</li>
          <li>Identifying patterns that no longer serve you</li>
          <li>Learning new tools to cope, communicate, and connect</li>
        </ul>
        <p>
          In doing so, you not only heal yourself—you create a ripple effect
          that can transform future generations.
        </p>
      </section>

      <section>
        <h2>It’s Normal to Feel Conflicted</h2>
        <p>You might ask yourself:</p>
        <ul>
          <li>Is it okay to question how I was raised?</li>
          <li>What if I uncover painful truths about my family?</li>
          <li>Can I really change patterns that have existed for decades?</li>
        </ul>
        <p>
          These questions are valid—and important. The journey can be emotional,
          but it is also freeing. Therapy provides a space to work through these
          feelings safely and respectfully.
        </p>
      </section>

      <section>
        <h2>The Takeaway</h2>
        <p>
          Intergenerational trauma is powerful—but so is your ability to heal.
          You don’t have to carry what was never yours to begin with. By seeking
          support, understanding your past, and choosing different responses,
          you’re not only reclaiming your own life—you’re reshaping your
          family’s future.
        </p>
      </section>

      <footer>
        <h3>Ready to Begin?</h3>
        <p>
          If you're curious about exploring your family history and healing from
          inherited pain, I offer a free 15-minute consultation. Let’s talk
          about how therapy can support your journey—and help you build the
          legacy you deserve.
        </p>
      </footer>
    </article>
  );
  return (
    <>
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
    </>
  );
};

export default Trauma;
