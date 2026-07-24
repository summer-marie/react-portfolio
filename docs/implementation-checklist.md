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
- [ ] `web-vitals` npm dependency is now unused (its only consumer, `src/reportWebVitals.js`, was removed in the Foundation phase) — remove it from `package.json` when a page/dependency cleanup task touches `package.json` next.
- [ ] 2 ESLint warnings remain, both in `src/components/socialicons/` (`index.jsx` unused param, `Socialicons.test.jsx` missing React scope) — resolve when/if `Socialicons` is rebuilt or removed (see the `Socialicons`/Footer duplication item below), then remove the relaxed-rule override block in `eslint.config.mjs` for `src/components/socialicons/**`. All of `src/pages/**` (Home, Work, About, Contact, Resume) is now rebuilt to the strict baseline with 0 warnings, so the `src/pages/**` entry in that same override block is also dead weight now — remove it in the same cleanup pass. (Was 9 after the Homepage rebuild, then 0 additional from Work/About/Contact/Resume — `src/components/socialicons/` is the only remaining source.)
- [x] Horizontal scroll at 375px on `/work` — resolved by the Work page rebuild (token-driven grid/carousel, no Bootstrap layout). The matching `/about` overflow was resolved by the About rebuild. Both halves of this Discovered Task are now closed.
- [ ] `Socialicons` vertical rail duplicates the new Footer's GitHub/LinkedIn links — see `.agent-memory/OPEN_QUESTIONS.md` for the open question on whether to remove, keep, or merge it.
- [ ] Homepage "Current Focus" section is a placeholder (`src/pages/home/index.jsx`) — `content_option.js` has no field for current focus areas. Add a real export (e.g. `currentFocus`) with 1–3 items, then replace the placeholder paragraph and check off Homepage > Current Focus.