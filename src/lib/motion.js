// Mirrors the motion tokens defined in src/index.css (--duration-*, --ease-*).
// Framer Motion's transition config needs numeric seconds and a cubic-bezier
// array rather than CSS custom properties, so these constants must be kept
// in sync with the CSS tokens by hand.

export const DURATION_HOVER = 0.2; // --duration-hover: 200ms
export const DURATION_PAGE = 0.32; // --duration-page: 320ms
export const DURATION_ENTRANCE = 0.5; // --duration-entrance: 500ms
export const DURATION_REDUCED = 0.01; // near-zero, for prefers-reduced-motion

export const EASE_STANDARD = [0.22, 1, 0.36, 1]; // --ease-standard
export const EASE_IN_OUT = [0.65, 0, 0.35, 1]; // --ease-in-out

export const PAGE_TRANSITION_OFFSET = 10; // px, y-offset for page transitions

export const pageTransitionVariants = {
  default: {
    initial: { opacity: 0, y: PAGE_TRANSITION_OFFSET },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION_PAGE, ease: EASE_STANDARD },
    },
    exit: {
      opacity: 0,
      y: -PAGE_TRANSITION_OFFSET,
      transition: { duration: DURATION_PAGE, ease: EASE_STANDARD },
    },
  },
  reduced: {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: DURATION_REDUCED } },
    exit: { opacity: 1, y: 0, transition: { duration: DURATION_REDUCED } },
  },
};
