import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Container } from "../../components/container/index.jsx";
import { Section } from "../../components/section/index.jsx";
import { meta, projects } from "../../content_option.js";
import {
  DURATION_ENTRANCE,
  DURATION_REDUCED,
  EASE_STANDARD,
  PAGE_TRANSITION_OFFSET,
} from "../../lib/motion.js";

const CAROUSEL_INTERVAL_MS = 3000;

const PAGE_DESCRIPTION =
  "Explore selected software projects by Summer Halsey, a full stack developer working in React, Node.js, and MongoDB, focused on clean UX and solid engineering.";

export const WorkPage = () => {
  const prefersReducedMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isHovered, setIsHovered] = useState({});

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const intervals = projects.map((project, projectIndex) => {
      if (project.images.length <= 1 || isHovered[projectIndex]) {
        return null;
      }
      return setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length,
        }));
      }, CAROUSEL_INTERVAL_MS);
    });

    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [isHovered, prefersReducedMotion]);

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) %
        projects[projectIndex].images.length,
    }));
  };

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex((prev) => ({ ...prev, [projectIndex]: imageIndex }));
  };

  const handleMouseEnter = (projectIndex) => {
    setIsHovered((prev) => ({ ...prev, [projectIndex]: true }));
  };

  const handleMouseLeave = (projectIndex) => {
    setIsHovered((prev) => ({ ...prev, [projectIndex]: false }));
  };

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
      <div className="work">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | {meta.title}</title>
          <meta name="description" content={PAGE_DESCRIPTION} />
          <meta property="og:title" content={`Work | ${meta.title}`} />
          <meta property="og:description" content={PAGE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Section className="work-header" aria-labelledby="work-header-heading">
          <Container>
            <motion.div initial="hidden" animate="show" variants={fadeRise}>
              <h1 id="work-header-heading" className="work-header__heading">
                Work
              </h1>
              <p className="work-header__tagline">{meta.description}</p>
            </motion.div>
          </Container>
        </Section>

        <Section className="work-projects" aria-label="Projects">
          <Container>
            <motion.ul
              className="work-projects__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {projects.map((project, projectIndex) => {
                const currentImg = currentImageIndex[projectIndex] || 0;
                const imageCount = project.images.length;
                const hasMultipleImages = imageCount > 1;

                return (
                  <motion.li key={project.title} className="work-card" variants={fadeRise}>
                    <div
                      className="work-card__carousel"
                      role="region"
                      aria-label="Project screenshots"
                      onMouseEnter={() => handleMouseEnter(projectIndex)}
                      onMouseLeave={() => handleMouseLeave(projectIndex)}
                    >
                      <img
                        className="work-card__image"
                        src={project.images[currentImg]}
                        alt={`${project.title} screenshot ${currentImg + 1} of ${imageCount}`}
                        width="1920"
                        height="1020"
                        loading={projectIndex === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />

                      {hasMultipleImages && (
                        <>
                          <button
                            type="button"
                            className="work-card__nav work-card__nav--prev"
                            onClick={() => prevImage(projectIndex)}
                            aria-label="Previous image"
                          >
                            <ChevronLeft aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="work-card__nav work-card__nav--next"
                            onClick={() => nextImage(projectIndex)}
                            aria-label="Next image"
                          >
                            <ChevronRight aria-hidden="true" />
                          </button>

                          <div className="work-card__dots">
                            {project.images.map((_, imageIndex) => (
                              <button
                                key={imageIndex}
                                type="button"
                                className={`work-card__dot${
                                  imageIndex === currentImg ? " work-card__dot--active" : ""
                                }`}
                                onClick={() => goToImage(projectIndex, imageIndex)}
                                aria-label={`Go to image ${imageIndex + 1}`}
                                aria-current={imageIndex === currentImg ? "true" : undefined}
                              />
                            ))}
                          </div>

                          <span className="work-visually-hidden" aria-live="polite" aria-atomic="true">
                            {`Image ${currentImg + 1} of ${imageCount}`}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="work-card__body">
                      <h2 className="work-card__title">{project.title}</h2>
                      <p className="work-card__description">{project.description}</p>

                      {project.technologies && (
                        <ul className="work-card__tags">
                          {project.technologies.map((tech) => (
                            <li key={tech} className="work-card__tag">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}

                      <a
                        className="work-card__link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub aria-hidden="true" />
                        View on GitHub
                      </a>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </Container>
        </Section>

        <Section className="work-closing">
          <Container>
            <p className="work-closing__text">More to come…</p>
          </Container>
        </Section>
      </div>
    </HelmetProvider>
  );
};
