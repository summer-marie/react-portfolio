import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router";
import { meta } from "../../content_option.js";

export const NotFound = () => {
  return (
    <HelmetProvider>
      <div className="notfound-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Page Not Found | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1 className="notfound-page__heading">Page not found</h1>
        <p className="notfound-page__note">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link className="notfound-page__link" to="/">
          Back to home
        </Link>
      </div>
    </HelmetProvider>
  );
};
