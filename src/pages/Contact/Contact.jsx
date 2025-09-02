import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import classes from "./Contact.module.scss";
import Footer from "../../components/Footer/Footer.jsx";
import Input from "../../components/Input/Input.jsx";

const Contact = () => {
  return (
    <main className={classes.contact}>
      <Hero alternate>
        <section className={classes.formSection}>
          <h1>contact us</h1>
          <p>
            Book your free 15-minute consultation to connect with me, ask
            questions about my approach, share what you’d like to work on, and
            see if we’re a good fit.
          </p>
          <form action="#" className={classes.form}>
            <div className={classes.formName}>
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            <Input type="email" label="Email" />
            <section className={classes.textAreaSection}>
              <label htmlFor="message">Message</label>
              <textarea name="#" id="message" required/>
            </section>
            <button type="submit">send</button>
          </form>
        </section>
      </Hero>

      <Footer alternate/>
    </main>
  );
};

export default Contact;
