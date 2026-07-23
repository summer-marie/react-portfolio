import React from "react";
import "./style.css";

export const Container = ({ as: Tag = "div", narrow = false, className = "", children, ...rest }) => {
  const classes = ["container-primitive", narrow && "container-primitive--narrow", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};
