# Portfolio V1

## Foundation
- [x] Routing
- [x] Theme
- [x] Navigation
- [x] Footer
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
- [ ] 10 ESLint warnings remain in not-yet-migrated legacy files (`src/pages/contact/index.jsx` console statements, `src/pages/home/index.jsx` unescaped entity, `src/components/socialicons/index.jsx` unused param, `src/components/socialicons/Socialicons.test.jsx` missing React scope) — resolve each as its file is rebuilt in its corresponding phase (Home, Work/About/Contact rebuild phases), then remove the corresponding relaxed-rule override block in `eslint.config.mjs`. (Was 11; `src/header/index.jsx`'s warning is gone now that the file is deleted.)
- [ ] Horizontal scroll present at 375px on `/work` (Portfolio) and `/about` — confirmed pre-existing in the untouched page-interior content (Bootstrap grid/images), not introduced by the Core Layout Navbar/Footer/shell work: `/`, `/resume`, `/contact`, and the shell chrome itself have no overflow at 375px. Fix when each page's interior is rebuilt.
- [ ] `Socialicons` vertical rail duplicates the new Footer's GitHub/LinkedIn links — see `.agent-memory/OPEN_QUESTIONS.md` for the open question on whether to remove, keep, or merge it.