import React from "react";
import "./style.css";

export const Section = ({ className = "", children, ...rest }) => {
  const classes = ["section-primitive", className].filter(Boolean).join(" ");

  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};
