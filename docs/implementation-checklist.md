# Portfolio V1

## Foundation
- [ ] Routing
- [ ] Theme
- [ ] Navigation
- [ ] Footer
- [x] Design Tokens

## Homepage
- [ ] Hero
- [ ] Featured Work
- [ ] Engineering Philosophy
- [ ] CTA

## Work
- [ ] Featured Project
- [ ] Project Grid
- [ ] CTA

## About
- [ ] Journey
- [ ] Values
- [ ] Skills
- [ ] Beyond Engineering

## Resume
- [ ] Timeline
- [ ] Skills
- [ ] Download Button

## Contact
- [ ] Contact Cards
- [ ] Contact Form
- [ ] CTA

## Final
- [ ] Accessibility
- [ ] Performance
- [ ] Responsive
- [ ] SEO

## Discovered Tasks
- [ ] `web-vitals` npm dependency is now unused (its only consumer, `src/reportWebVitals.js`, was removed in the Foundation phase) — remove it from `package.json` when a page/dependency cleanup task touches `package.json` next.
- [ ] 11 ESLint warnings remain in not-yet-migrated legacy files (`src/pages/contact/index.jsx` console statements, `src/pages/home/index.jsx` unescaped entity, `src/header/index.jsx` unused import, `src/components/socialicons/index.jsx` unused param, `src/components/socialicons/Socialicons.test.jsx` missing React scope) — resolve each as its file is rebuilt in its corresponding phase (Home, Work/About/Contact rebuild phases), then remove the corresponding relaxed-rule override block in `eslint.config.mjs`.