# Portfolio V1

## Foundation
- [x] Routing
- [x] Theme
- [x] Navigation
- [x] Footer
- [x] Design Tokens

## Homepage
- [x] Hero
- [x] How I Work (short intro)
- [x] Engineering Approach
- [x] Featured Projects
- [x] Core Skills
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
- [x] Accessibility
- [x] Performance
- [x] Responsive
- [x] SEO

## Discovered Tasks
- [x] `web-vitals` npm dependency is now unused (its only consumer, `src/reportWebVitals.js`, was removed in the Foundation phase) — removed from `package.json`/`package-lock.json` in the Socialicons cleanup task.
- [x] 2 ESLint warnings remain, both in `src/components/socialicons/` (`index.jsx` unused param, `Socialicons.test.jsx` missing React scope) — resolved by deleting `src/components/socialicons/` entirely and removing the now-dead relaxed-rule override block in `eslint.config.mjs` (which also covered the already-fully-migrated `src/pages/**` and the already-deleted `src/header/**`). `npm run lint` now reports 0 errors, 0 warnings.
- [x] Horizontal scroll at 375px on `/work` — resolved by the Work page rebuild (token-driven grid/carousel, no Bootstrap layout). The matching `/about` overflow was resolved by the About rebuild. Both halves of this Discovered Task are now closed.
- [x] `Socialicons` vertical rail duplicates the new Footer's GitHub/LinkedIn links — resolved: removed `Socialicons` entirely (component, its usage in `src/app/routes.jsx`, and its test) since the Footer already covers the same GitHub/LinkedIn links.
- [x] Homepage refactored to match `docs/wireframes/homepage-1440.png`'s information hierarchy: Hero → How I Work (new, `dataAbout.homeSummary` - a dedicated 2-3 sentence Home-only summary, not a truncation of `aboutMe`) → Engineering Approach (renamed from "How I Work", same 6 strength cards) → Featured Projects (renamed from "Selected Work") → Core Skills (new, lightweight `<dl>` reference using the `skills` category data, no cards/percentages) → CTA. Engineering Approach and Featured Projects were later swapped per explicit request, placing engineering approach above the project proof. The "Current Focus" placeholder section is removed entirely - it was never real content and isn't part of the new hierarchy.
- [x] Bootstrap, react-bootstrap, animate.css, and typewriter-effect removed from `package.json`/`package-lock.json` (Final phase). Also removed `src/app/App.css`, whose only rules were dead Bootstrap grid container overrides (`.container-lg`/`-md`/`-xl`) referenced by no component.
- [x] Light-theme `--color-accent` (#a8632f) on `--color-bg` measured ~4.19:1, under the WCAG AA 4.5:1 minimum for normal text. The three default-state text links using it (`home-section-link`, `contact-info__email`, `notfound-page__link`) now use `--color-accent-strong` instead (5.83:1 light / 8.15:1 dark). Token values themselves were left unchanged — icons, borders, and hover-only states using `--color-accent` are unaffected.
- [x] Added explicit `width`/`height`/`loading`/`decoding` to all `<img>` elements (Home featured-work images, About profile portrait, Work carousel images) to prevent layout shift. Above-the-fold images (About portrait, Work's first project card) are `loading="eager"`; everything else is `loading="lazy"`.
- [x] Added a unique 150–160 character SEO meta description, `og:title`, `og:description`, `og:type`, and `robots` to every page's `<Helmet>` block. The 404 page uses `robots: noindex, nofollow` instead of `index, follow`. `content_option.js`'s shared `meta.description` was left untouched since it's also used as visible copy (Home hero tagline, Work header tagline, Footer tagline).
- [ ] `About` page's profile image (`src/assets/images/image5.png`) is 2.7 MB — the largest asset in the production build by a wide margin, and it's `loading="eager"` (above the fold), so it directly impacts LCP on `/about`. No image-compression tooling exists in this repo and adding one wasn't in this task's scope (see `.agent-memory/OPEN_QUESTIONS.md`).
- [x] `index.html`'s `<link rel="canonical">` and every page's `og:url` now point to the confirmed production domain, `https://shalsey.dev`.
- [x] Replaced the placeholder logo (SVG favicons) with the real S/H mark across `favicon.png` (32x32), `apple-touch-icon.png` (180x180), `icon-192.png`, and `icon-512.png` in `public/`. Updated `index.html`'s icon links, `public/manifest.json`, and `public/site.webmanifest` to reference the new files; deleted the orphaned `favicon.svg`/`icon-192.svg`/`icon-512.svg`. Also corrected `theme-color`/`manifest.json` `theme_color`/`background_color` from a leftover `#8B0000` (unrelated dark red) to `#16130f` (the actual dark-theme `--color-bg`).