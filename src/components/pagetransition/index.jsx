import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pageTransitionVariants } from "../../lib/motion.js";

export const PageTransition = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion
    ? pageTransitionVariants.reduced
    : pageTransitionVariants.default;

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
      {children}
    </motion.div>
  );
};
