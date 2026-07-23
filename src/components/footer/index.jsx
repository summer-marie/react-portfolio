import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactConfig, logoText, meta, socialProfiles } from "../../content_option.js";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{logoText}</p>
          <p className="site-footer__tagline">{meta.description}</p>
        </div>

        <div className="site-footer__links">
          <a className="site-footer__email" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
            {contactConfig.YOUR_EMAIL}
          </a>
          <div className="site-footer__icons">
            <a
              href={socialProfiles.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="site-footer__icon-link"
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </a>
            <a
              href={socialProfiles.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="site-footer__icon-link"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
            </a>
          </div>
        </div>
      </div>

      <p className="site-footer__copyright">
        &copy; {year} {logoText}. All rights reserved.
      </p>
    </footer>
  );
};
