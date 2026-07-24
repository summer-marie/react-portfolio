# Open Questions

## 2026-07-23 — No ESLint configuration exists

**Question:** `AGENTS.md` Section 10 requires `npm run lint` to pass before handoff, but no ESLint configuration or `lint` script exists anywhere in the repository.

**Why it matters:** The required verification suite cannot fully pass without a lint script; installing/configuring ESLint was explicitly out of scope for this task ("do not introduce unrelated tooling").

**Work blocked by it:** Full compliance with the "Required Verification Before Handoff" checklist.

**Safe work that can continue:** Vitest and Playwright installation, configuration, and smoke tests are unaffected and were completed.

**Resolution:** Resolved 2026-07-23 in the Foundation phase (`feat/foundation-tokens-and-tooling`). ESLint (flat config, `eslint.config.mjs`) and Prettier are now configured with `lint`/`lint:fix`/`format` scripts in `package.json`. `npm run lint` passes with 0 errors (11 warnings scoped to not-yet-migrated legacy files — see `docs/implementation-checklist.md` Discovered Tasks).

## 2026-07-23 — Socialicons rail duplicates the new Footer's social links

**Question:** `src/components/socialicons/index.jsx` (the vertical "Follow Me" rail rendered inside `AppRoutes`) and the new `Footer` component both now render GitHub/LinkedIn links pulled from the same `socialProfiles` data. Should the `Socialicons` rail be removed now that the Footer covers the same links, or kept as a distinct persistent affordance?

**Why it matters:** Two visually different controls pointing at the same destinations is redundant UI and could read as unpolished, but removing `Socialicons` was explicitly out of scope for the Core Layout task that built the Navbar/Footer.

**Work blocked by it:** None — both currently coexist without functional conflict. Purely a visual-design decision.

**Safe work that can continue:** All other Core Layout and future page-rebuild work.

**Resolution:** Resolved 2026-07-23 in the `fix/socialicons-cleanup` task. User decision: remove `Socialicons` entirely — the Footer already covers the same GitHub/LinkedIn links, so the rail was pure redundancy. Deleted `src/components/socialicons/` and its usage in `src/app/routes.jsx` (the actual render site — not `src/app/App.jsx`, which the task briefing assumed; `App.jsx` never imported `Socialicons`).

## 2026-07-23 — User wants to revisit how projects are displayed (specifics TBD)

**Question:** During the Work-page rebuild task, the user said they want to update how projects are shown, without giving further detail on what should change (layout, card content, additional fields, categorization, etc.).

**Why it matters:** The Work-page rebuild happening now (token-driven cards + carousel, per `projects[]` in `content_option.js`) should not be assumed to be the final treatment — expect a follow-up task that changes project presentation.

**Work blocked by it:** None. The current Work-page rebuild proceeds as specified in that task.

**Safe work that can continue:** All of the current Work-page rebuild task.

**Resolution:** Unresolved — ask the user for specifics (e.g., different card layout, new project fields, reordering/featured status, alternate carousel treatment) when they're ready to scope that follow-up.

## 2026-07-23 — Production domain unconfirmed (canonical link placeholder)

**Question:** The Final-phase SEO task asked for a `<link rel="canonical">` in `index.html`, but no production domain was specified or confirmed anywhere in the repo docs.

**Why it matters:** A wrong canonical URL actively hurts SEO (tells search engines the real content lives elsewhere), so this needs a real answer before the domain is finalized.

**Work blocked by it:** None — the placeholder doesn't block any other work.

**Safe work that can continue:** Everything else in the Final phase.

**Resolution:** Resolved 2026-07-23. User confirmed the production domain is `shalsey.dev`. Updated `<link rel="canonical">` in `index.html` to `https://shalsey.dev`, and added `og:url` (matching each route, e.g. `https://shalsey.dev/work`) to every page's `<Helmet>` block except the 404 page (noindex, no single canonical URL to point at).

## 2026-07-23 — About page profile image is 2.7 MB (largest asset in the build, loaded eager)

**Question:** `src/assets/images/image5.png` (the About page portrait, `introData.your_img_url`) is 2.7 MB — by far the largest asset in `npm run build` output, and it's `loading="eager"` because it's above the fold, so it directly affects `/about`'s LCP. Should it be compressed/resized, and if so with what tooling?

**Why it matters:** A 2.7 MB above-the-fold image undermines the Final phase's performance goals. No image-compression dependency (e.g. `sharp`, `imagemin`) exists in this repo, and adding one wasn't authorized for this task ("Do not add new dependencies unless critically justified").

**Work blocked by it:** None — the image renders correctly, this is a performance quality concern, not a functional bug.

**Safe work that can continue:** Everything else; this doesn't block any other Final-phase work.

**Resolution:** Unresolved. Left as-is (source file, not modified) with explicit `width`/`height` attributes to at least prevent layout shift. Recommend either manually re-exporting the source photo at a smaller file size/resolution, or approving an image-optimization dependency in a follow-up task.
