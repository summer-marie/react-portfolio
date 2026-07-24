import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { Container } from "../../components/container/index.jsx";
import { Section } from "../../components/section/index.jsx";
import { contactConfig, meta } from "../../content_option.js";
import {
  DURATION_ENTRANCE,
  DURATION_REDUCED,
  EASE_STANDARD,
  PAGE_TRANSITION_OFFSET,
} from "../../lib/motion.js";

const PAGE_DESCRIPTION =
  "Get in touch with Summer Halsey, a full stack developer open to new projects and collaboration. Email her or connect on LinkedIn and GitHub to start talking.";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });
  const alertRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        () => {
          setFormData({
            user_email: "",
            user_name: "",
            subject: "",
            message: "",
            loading: false,
            alertMessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormData((prev) => ({
            ...prev,
            loading: false,
            alertMessage: `Failed to send! ${error.text}`,
            variant: "error",
            show: true,
          }));
          alertRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      );
  };

  const dismissAlert = () => setFormData((prev) => ({ ...prev, show: false }));

  const entranceTransition = prefersReducedMotion
    ? { duration: DURATION_REDUCED }
    : { duration: DURATION_ENTRANCE, ease: EASE_STANDARD };

  const fadeRise = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : PAGE_TRANSITION_OFFSET,
    },
    show: { opacity: 1, y: 0, transition: entranceTransition },
  };

  return (
    <HelmetProvider>
      <div className="contact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | {meta.title}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta property="og:title" content={`Contact | ${meta.title}`} />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shalsey.dev/contact" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Section className="contact-header" aria-labelledby="contact-header-heading">
          <Container>
            <motion.h1
              id="contact-header-heading"
              className="contact-header__heading"
              initial="hidden"
              animate="show"
              variants={fadeRise}
            >
              Get in Touch
            </motion.h1>
          </Container>
        </Section>

        <Section className="contact-body">
          <Container>
            <div
              ref={alertRef}
              role={formData.show ? "alert" : undefined}
              className={`contact-alert contact-alert--${formData.variant || "success"}${
                formData.show ? " contact-alert--visible" : ""
              }`}
            >
              <p className="contact-alert__text">{formData.alertMessage}</p>
              <button
                type="button"
                className="contact-alert__dismiss"
                aria-label="Dismiss notification"
                onClick={dismissAlert}
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <motion.div
              className="contact-grid"
              initial="hidden"
              animate="show"
              variants={fadeRise}
            >
              <div className="contact-info">
                <h2 className="contact-info__heading">Contact Info</h2>
                <a className="contact-info__email" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  <Mail aria-hidden="true" />
                  {contactConfig.YOUR_EMAIL}
                </a>
                <p className="contact-info__description">{contactConfig.description}</p>
              </div>

              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  {formData.loading && (
                    <div className="contact-form__progress" role="status">
                      <span className="sr-only">Sending message…</span>
                    </div>
                  )}

                  <div className="contact-form__field">
                    <label htmlFor="contact-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className="contact-form__input"
                      name="user_name"
                      type="text"
                      placeholder="Name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      className="contact-form__input"
                      name="user_email"
                      type="email"
                      placeholder="Email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      className="contact-form__input"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="contact-form__input contact-form__input--textarea"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>

                  <button className="contact-form__submit" type="submit" disabled={formData.loading}>
                    {formData.loading ? "Sending…" : "Send"}
                  </button>
                </form>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </HelmetProvider>
  );
};
