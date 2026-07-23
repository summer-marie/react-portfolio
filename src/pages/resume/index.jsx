import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option.js";

export const Resume = () => {
  return (
    <HelmetProvider>
      <div className="resume-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1 className="resume-page__heading">Resume</h1>
        <p className="resume-page__note">
          The full résumé is coming soon. Once it is ready, a download link will appear
          below.
        </p>
        <button className="resume-page__download" type="button" disabled aria-disabled="true">
          Download PDF (coming soon)
        </button>
      </div>
    </HelmetProvider>
  );
};
