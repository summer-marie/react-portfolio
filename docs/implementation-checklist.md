# Portfolio V1

## Foundation
- [x] Routing
- [x] Theme
- [x] Navigation
- [x] Footer
- [x] Design Tokens

## Homepage
- [x] Hero
- [x] Featured Work
- [x] Engineering Philosophy
- [ ] Current Focus
- [x] CTA

## Work
- [x] Project cards
- [x] Image carousel
- [x] Technology tags
- [x] GitHub links
- [ ] Live demo / CTA (no `liveUrl` field exists in `content_option.js`)

## About
- [x] Journey
- [x] Values
- [x] Skills
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
- [ ] 9 ESLint warnings remain in not-yet-migrated legacy files (`src/pages/contact/index.jsx` console statements, `src/components/socialicons/index.jsx` unused param, `src/components/socialicons/Socialicons.test.jsx` missing React scope) — resolve each as its file is rebuilt in its corresponding phase (Contact rebuild phase; Work and About are now rebuilt and contribute 0 warnings), then remove the corresponding relaxed-rule override block in `eslint.config.mjs`. (Was 10; `src/pages/home/index.jsx`'s unescaped-entity warning is gone now that the homepage was rebuilt without contractions in authored copy.)
- [x] Horizontal scroll at 375px on `/work` — resolved by the Work page rebuild (token-driven grid/carousel, no Bootstrap layout). The matching `/about` overflow was resolved by the About rebuild. Both halves of this Discovered Task are now closed.
- [ ] `Socialicons` vertical rail duplicates the new Footer's GitHub/LinkedIn links — see `.agent-memory/OPEN_QUESTIONS.md` for the open question on whether to remove, keep, or merge it.
- [ ] Homepage "Current Focus" section is a placeholder (`src/pages/home/index.jsx`) — `content_option.js` has no field for current focus areas. Add a real export (e.g. `currentFocus`) with 1–3 items, then replace the placeholder paragraph and check off Homepage > Current Focus.