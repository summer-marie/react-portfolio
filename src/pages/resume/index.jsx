import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { Container } from "../../components/container/index.jsx";
import { Section } from "../../components/section/index.jsx";
import { dataAbout, education, meta, skills } from "../../content_option.js";
import {
  DURATION_ENTRANCE,
  DURATION_REDUCED,
  EASE_STANDARD,
  PAGE_TRANSITION_OFFSET,
} from "../../lib/motion.js";

const RESUME_PDF_PATH = "/assets/resume/summer-halsey-resume.pdf";
const RESUME_PDF_FILENAME = "summer-halsey-resume.pdf";

const firstSentence = (text) => {
  const [sentence] = text.split(". ");
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
};

// education[].date is stored as "M/YYYY"; <time dateTime> needs "YYYY-MM".
const toIsoMonth = (date) => {
  const [month, year] = date.split("/");
  return `${year}-${month.padStart(2, "0")}`;
};

const PAGE_DESCRIPTION =
  "View Summer Halsey resume: education, technical skills, and experience as a full stack developer, with a downloadable PDF for hiring managers and recruiters.";

const DownloadResumeButton = ({ className = "" }) => (
  <a
    className={["resume-download-button", className].filter(Boolean).join(" ")}
    href={RESUME_PDF_PATH}
    download={RESUME_PDF_FILENAME}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download Summer Halsey resume PDF"
  >
    <Download aria-hidden="true" className="resume-download-button__icon" />
    Download Résumé
  </a>
);

export const Resume = () => {
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
      <div className="resume-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume | {meta.title}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta property="og:title" content={`Resume | ${meta.title}`} />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shalsey.dev/resume" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Section className="resume-header" aria-labelledby="resume-header-heading">
          <Container>
            <motion.div
              className="resume-header__content"
              initial="hidden"
              animate="show"
              variants={fadeRise}
            >
              <h1 id="resume-header-heading" className="resume-header__heading">
                Résumé
              </h1>
              <p className="resume-header__tagline">{firstSentence(dataAbout.aboutMe)}</p>
              <DownloadResumeButton className="resume-header__download" />
            </motion.div>
          </Container>
        </Section>

        <Section className="resume-education" aria-labelledby="resume-education-heading">
          <Container narrow>
            <motion.h2
              id="resume-education-heading"
              className="resume-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Education
            </motion.h2>

            <motion.ol
              className="resume-timeline"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {education.map((item) => (
                <motion.li
                  key={item.certification}
                  className="resume-timeline__item"
                  variants={fadeRise}
                >
                  <span className="resume-timeline__marker" aria-hidden="true" />
                  <h3 className="resume-timeline__cert">{item.certification}</h3>
                  <p className="resume-timeline__where">{item.where}</p>
                  <time className="resume-timeline__date" dateTime={toIsoMonth(item.date)}>
                    {item.date}
                  </time>
                </motion.li>
              ))}
            </motion.ol>
          </Container>
        </Section>

        <Section className="resume-skills" aria-labelledby="resume-skills-heading">
          <Container>
            <motion.h2
              id="resume-skills-heading"
              className="resume-section-heading"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeRise}
            >
              Technical Skills
            </motion.h2>

            <motion.ul
              className="resume-skills__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {skills.map((skill) => (
                <motion.li key={skill.name} className="resume-skills__badge" variants={fadeRise}>
                  {skill.name}
                </motion.li>
              ))}
            </motion.ul>
          </Container>
        </Section>

        <Section className="resume-footer-cta">
          <Container>
            <DownloadResumeButton />
          </Container>
        </Section>
      </div>
    </HelmetProvider>
  );
};
