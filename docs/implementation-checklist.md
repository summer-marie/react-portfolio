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
- [x] Timeline
- [x] Skills
- [x] Download Button

## Contact
- [x] Contact form
- [x] EmailJS integration
- [x] Form validation
- [x] Success/error states

## Final
- [ ] Accessibility
- [ ] Performance
- [ ] Responsive
- [ ] SEO

## Discovered Tasks
- [x] `web-vitals` npm dependency is now unused (its only consumer, `src/reportWebVitals.js`, was removed in the Foundation phase) — removed from `package.json`/`package-lock.json` in the Socialicons cleanup task.
- [x] 2 ESLint warnings remain, both in `src/components/socialicons/` (`index.jsx` unused param, `Socialicons.test.jsx` missing React scope) — resolved by deleting `src/components/socialicons/` entirely and removing the now-dead relaxed-rule override block in `eslint.config.mjs` (which also covered the already-fully-migrated `src/pages/**` and the already-deleted `src/header/**`). `npm run lint` now reports 0 errors, 0 warnings.
- [x] Horizontal scroll at 375px on `/work` — resolved by the Work page rebuild (token-driven grid/carousel, no Bootstrap layout). The matching `/about` overflow was resolved by the About rebuild. Both halves of this Discovered Task are now closed.
- [x] `Socialicons` vertical rail duplicates the new Footer's GitHub/LinkedIn links — resolved: removed `Socialicons` entirely (component, its usage in `src/app/routes.jsx`, and its test) since the Footer already covers the same GitHub/LinkedIn links.
- [ ] Homepage "Current Focus" section is a placeholder (`src/pages/home/index.jsx`) — `content_option.js` has no field for current focus areas. Add a real export (e.g. `currentFocus`) with 1–3 items, then replace the placeholder paragraph and check off Homepage > Current Focus.