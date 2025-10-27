import React, { useState } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import classes from "./Contact.module.scss";
import Footer from "../../components/Footer/Footer.jsx";
import Input from "../../components/Input/Input.jsx";
import ScrollFadeIn from "./../../components/ScrollFadeIn/ScrollFadeIn";
import Spinner from "../../components/Spinner/Spinner.jsx";
import { Helmet } from "react-helmet";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "https://baffour-asamoah-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={classes.contact}>
      <Helmet>
        <title>
          Contact Asamoah Associates | Book a Therapy Session or Consultation
        </title>
        <meta
          name="description"
          content="Reach out to Asamoah Associates for appointments, inquiries, or consultations. We offer both virtual and in-person therapy sessions in the GTA."
        />
        <meta
          name="keywords"
          content="contact therapist Toronto, book therapy session, psychotherapy consultation, counselling contact form, Dr. Baffour Asamoah"
        />

        <meta
          property="og:title"
          content="Contact Asamoah Associates | Book a Therapy Session or Consultation"
        />
        <meta
          property="og:description"
          content="Contact our team to book a session or consultation. We offer both virtual and in-person therapy across the GTA."
        />
        <meta
          property="og:image"
          content="https://www.asamoahassociates.com/assets/og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.asamoahassociates.com/contact"
        />
      </Helmet>

      <Hero alternate>
        <section className={classes.formSection}>
          <ScrollFadeIn>
            <h1>contact us</h1>
          </ScrollFadeIn>

          <p>
            Book your free 15-minute consultation to connect with me, ask
            questions about my approach, share what you’d like to work on, and
            see if we’re a good fit.
          </p>

          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formName}>
              <Input
                label="First Name"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                label="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <Input
              type="email"
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <section className={classes.textAreaSection}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </section>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>

            {loading && <Spinner />}

            {status === "success" && (
              <p className={classes.successMessage}>
                ✅ Message sent successfully! Dr. Baffour will get back to you
                soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "red", textAlign: "center" }}>
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </section>
      </Hero>

      <Footer alternate />
    </main>
  );
};

export default Contact;
