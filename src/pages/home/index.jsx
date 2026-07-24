import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Blocks, BrainCircuit, FileText, Mail, ShieldCheck, Users } from "lucide-react";
import { Container } from "../../components/container/index.jsx";
import { Section } from "../../components/section/index.jsx";
import {
  contactConfig,
  dataAbout,
  homeShowcase,
  introData,
  meta,
  skills,
  strengths,
} from "../../content_option.js";
import {
  DURATION_ENTRANCE,
  DURATION_REDUCED,
  EASE_STANDARD,
  PAGE_TRANSITION_OFFSET,
} from "../../lib/motion.js";

// Index-matched to content_option.js's `strengths` array (Customer-Focused
// Engineering, AI & Retrieval Systems, Systems Architecture,
// Documentation-First Development, Quality & Testing, Security & Production
// Mindset).
const STRENGTH_ICONS = [Users, BrainCircuit, Blocks, FileText, BadgeCheck, ShieldCheck];

const PAGE_DESCRIPTION =
  "Summer Halsey is a full stack developer building production-ready React apps with a data-driven, product-minded approach. Explore her work and get in touch.";

export const Home = () => {
  const prefersReducedMotion = useReducedMotion();

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

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  };

  return (
    <HelmetProvider>
      <div className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shalsey.dev/" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Section className="home-hero" aria-labelledby="home-hero-heading">
          <Container>
            <motion.div
              className="home-hero__content"
              initial="hidden"
              animate="show"
              variants={fadeRise}
            >
              <h1 id="home-hero-heading" className="home-hero__heading">
                {introData.title}
              </h1>
              <p className="home-hero__tagline">{meta.description}</p>
              <div className="home-hero__actions">
                <Link to="/work" className="home-hero__cta home-hero__cta--primary">
                  View Work
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link to="/contact" className="home-hero__cta home-hero__cta--secondary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </Container>
        </Section>

        <Section className="home-intro" aria-labelledby="home-intro-heading">
          <Container narrow>
            <motion.h2
              id="home-intro-heading"
              className="home-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              How I Work
            </motion.h2>

            <motion.p
              className="home-intro__summary"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              {dataAbout.homeSummary}
            </motion.p>
          </Container>
        </Section>

        <Section className="home-how" aria-labelledby="home-how-heading">
          <Container>
            <motion.h2
              id="home-how-heading"
              className="home-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Engineering Approach
            </motion.h2>

            <motion.ul
              className="home-how__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {strengths.map((strength, index) => {
                const Icon = STRENGTH_ICONS[index % STRENGTH_ICONS.length];
                const firstSentence = strength.description.split(". ")[0].replace(/\.*$/, ".");

                return (
                  <motion.li key={strength.title} className="home-how__item" variants={fadeRise}>
                    <Icon className="home-how__icon" aria-hidden="true" />
                    <h3 className="home-how__title">{strength.title}</h3>
                    <p className="home-how__summary">{firstSentence}</p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </Container>
        </Section>

        <Section className="home-work" aria-labelledby="home-work-heading">
          <Container>
            <motion.h2
              id="home-work-heading"
              className="home-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Featured Projects
            </motion.h2>

            <motion.ul
              className="home-work__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {homeShowcase.map((project) =>
                project.video ? (
                  <motion.li
                    key={project.title}
                    className="home-work__item home-work__item--video"
                    variants={fadeRise}
                  >
                    <video
                      className="home-work__video"
                      src={project.video}
                      poster={project.poster}
                      aria-label={`${project.title} demo video`}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </motion.li>
                ) : (
                  <motion.li key={project.title} className="home-work__item" variants={fadeRise}>
                    <a
                      className="home-work__card"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="home-work__image"
                        src={project.images[0]}
                        alt={`${project.title} preview screenshot`}
                        width="1920"
                        height="1020"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="home-work__body">
                        <h3 className="home-work__title">{project.title}</h3>
                        <p className="home-work__description">{project.description}</p>
                        {project.technologies && (
                          <ul className="home-work__tags">
                            {project.technologies.map((tech) => (
                              <li key={tech} className="home-work__tag">
                                {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </a>
                  </motion.li>
                )
              )}
            </motion.ul>

            <div className="home-work__footer">
              <Link to="/work" className="home-section-link">
                View all work
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </Section>

        <Section className="home-skills" aria-labelledby="home-skills-heading">
          <Container>
            <motion.h2
              id="home-skills-heading"
              className="home-section-heading home-section-heading--compact"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Core Skills
            </motion.h2>

            <motion.dl
              className="home-skills__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {skills.map((group) => (
                <motion.div key={group.category} className="home-skills__group" variants={fadeRise}>
                  <dt className="home-skills__category">{group.category}</dt>
                  <dd className="home-skills__items">{group.items.join(" • ")}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </Container>
        </Section>

        <Section className="home-cta" aria-labelledby="home-cta-heading">
          <Container narrow>
            <motion.div
              className="home-cta__content"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              <h2 id="home-cta-heading" className="home-cta__heading">
                Ready to build something together
              </h2>
              <p className="home-cta__text">{contactConfig.description}</p>
              <div className="home-cta__actions">
                <a className="home-cta__link" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  <Mail aria-hidden="true" />
                  {contactConfig.YOUR_EMAIL}
                </a>
                <Link to="/contact" className="home-cta__button">
                  Go to Contact
                </Link>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </HelmetProvider>
  );
};
