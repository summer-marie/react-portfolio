import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Palette, Server, ShieldCheck } from "lucide-react";
import { Container } from "../../components/container/index.jsx";
import { Section } from "../../components/section/index.jsx";
import { dataAbout, education, introData, skills, strengths } from "../../content_option.js";
import {
  DURATION_ENTRANCE,
  DURATION_REDUCED,
  EASE_STANDARD,
  PAGE_TRANSITION_OFFSET,
} from "../../lib/motion.js";

const STRENGTH_ICONS = [Server, Palette, ShieldCheck];

const PAGE_TITLE = "About | Summer Halsey";
const PAGE_DESCRIPTION =
  "Learn about Summer Halsey, a full stack developer with strengths in backend security and UI/UX design, plus her education, skills, and engineering approach.";

const summarize = (text, sentenceCount = 2) => {
  const sentences = text.split(". ").filter(Boolean);
  return sentences.slice(0, sentenceCount).join(". ").replace(/\.*$/, ".");
};

export const About = () => {
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
      <div className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta property="og:title" content={PAGE_TITLE} />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shalsey.dev/about" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Section className="about-intro" aria-labelledby="about-intro-heading">
          <Container>
            <motion.div
              className="about-intro__grid"
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              <motion.div className="about-intro__content" variants={fadeRise}>
                <h1 id="about-intro-heading" className="about-intro__heading">
                  {dataAbout.title}
                </h1>
                <p className="about-intro__bio">{dataAbout.aboutMe}</p>
                <p className="about-intro__bio">{introData.description}</p>
              </motion.div>
              <motion.div className="about-intro__media" variants={fadeRise}>
                <img
                  className="about-intro__image"
                  src={introData.your_img_url}
                  alt="Portrait of Summer Halsey, full stack developer"
                  width="1254"
                  height="1254"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        <Section className="about-strengths" aria-labelledby="about-strengths-heading">
          <Container>
            <motion.h2
              id="about-strengths-heading"
              className="about-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Strengths
            </motion.h2>

            <motion.ul
              className="about-strengths__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {strengths.map((strength, index) => {
                const Icon = STRENGTH_ICONS[index % STRENGTH_ICONS.length];

                return (
                  <motion.li
                    key={strength.title}
                    className="about-strengths__card"
                    variants={fadeRise}
                  >
                    <Icon className="about-strengths__icon" aria-hidden="true" />
                    <h3 className="about-strengths__title">{strength.title}</h3>
                    <p className="about-strengths__summary">{summarize(strength.description)}</p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </Container>
        </Section>

        <Section className="about-education" aria-labelledby="about-education-heading">
          <Container narrow>
            <motion.h2
              id="about-education-heading"
              className="about-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Education
            </motion.h2>

            <motion.ul
              className="about-education__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {education.map((item) => (
                <motion.li
                  key={item.certification}
                  className="about-education__item"
                  variants={fadeRise}
                >
                  <span className="about-education__cert">{item.certification}</span>
                  <span className="about-education__where">{item.where}</span>
                  <span className="about-education__date">{item.date}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Container>
        </Section>

        <Section className="about-skills" aria-labelledby="about-skills-heading">
          <Container>
            <motion.h2
              id="about-skills-heading"
              className="about-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Skills
            </motion.h2>

            <motion.div
              className="about-skills__grid"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {skills.map((group) => (
                <motion.div key={group.category} className="about-skills__group" variants={fadeRise}>
                  <h3 className="about-skills__category">{group.category}</h3>
                  <ul className="about-skills__items">
                    {group.items.map((item) => (
                      <li key={item} className="about-skills__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>
      </div>
    </HelmetProvider>
  );
};
