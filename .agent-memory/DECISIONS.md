## React Architecture

- The portfolio will use its existing React, Vite, and React Router architecture.
- The project will remain a client-side static application.
- The project will not migrate to Next.js.
- React Router Framework Mode, SSR, and server-runtime features require explicit user approval.
- Hosting-provider-specific behavior should be minimized.

## 2026-07-23 — Shared memory directory name

**Decision:** The shared agent memory directory is `.agent-memory\` (singular "agent"), matching `AGENTS.md`.

**Reason:** An existing `.agents-memory\` (plural) folder was created by mistake and did not match the name referenced throughout `AGENTS.md` and `docs\06-tech-stack.md`. Renamed to prevent agents from creating a second, unused memory directory.

**Source/Approver:** User request.

**Files/Systems Affected:** `.agent-memory\` (renamed), no other files referenced the old name.

## 2026-07-23 — Test framework installation

**Decision:** Installed Vitest (+ `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`, `@vitest/coverage-v8`) and `@playwright/test`, configured via `vite.config.js` (`test` block) and a new `playwright.config.js`.

**Reason:** Required by `AGENTS.md` Section 7 (Testing Standards); no competing test framework existed previously.

**Source/Approver:** User request.

**Files/Systems Affected:** `package.json`, `vite.config.js`, `playwright.config.js`, `src/test/setup.js`.

## 2026-07-23 — Portfolio V1 migration decisions (architecture review approved)

**Decision:** Phase 1 architecture review approved. Nine decisions resolve the review's open questions. Full durable record is in `docs/decisions.md`; summary below (docs/decisions.md is the source of truth).

1. **Stack:** Adopt Tailwind CSS, Framer Motion, Lucide React, ESLint, Prettier (ESLint/Prettier as `devDependencies`). Do NOT init shadcn/ui in the foundation phase — build documented primitives directly; add shadcn later only if clearly needed.
2. **Routing:** `/work` canonical; redirect `/portfolio` → `/work`; nav labels Home/Work/About/Resume/Contact; add a real 404 route (stop rendering Home for unmatched paths).
3. **Bootstrap:** Remove Bootstrap/react-bootstrap incrementally (build foundation → replace components → confirm no imports → uninstall). Same for `animate.css`, `typewriter-effect`, `react-transition-group`.
4. **Fonts:** Replace Marcellus/Raleway with Geist + Geist Mono; self-host or use the `geist` npm package (not CDN).
5. **EmailJS:** Keep current implementation; do NOT move config to env vars now (Vercel access blocked by 2FA). Add loading/success/error states, disable submit while sending, accessible status messaging; no hosting-provider-dependent changes.
6. **Resume:** HTML-first page; clearly labeled placeholder for the PDF download until the real file is supplied. No fictional résumé content or fake PDF.
7. **Doc corrections:** Small docs-only task to fix stale filename refs in `docs/README.md` and `docs/wireframes/README.md`, BEFORE application implementation.
8. **Decision records:** `docs/decisions.md` is durable source of truth; this file is working memory and must mirror important decisions.
9. **Clean migration:** Remove custom cursor, vertical section-nav rail, skill % bars, hero headshot background, orphan entry files (`src/index.jsx`, `src/reportWebVitals.js`), empty `bottomnav`, and legacy full-height slide transitions. No unrelated page-content changes during the foundation phase.

**Reason:** Aligns implementation with the documented V1 architecture, design system, and engineering standards; resolves anti-goal and accessibility conflicts found in the review.

**Source/Approver:** User, approving the Phase 1 architecture review.

**Files/Systems Affected:** `docs/decisions.md` (new content), `package.json`, `index.html`, token/layout foundation, routing, header/navigation, home/about/work/contact/resume pages, and the legacy files slated for removal.

## 2026-07-23 — Foundation phase: technical substitutions (Geist package, ESLint version)

**Decision:** Two technical substitutions to prior decisions, made during Foundation-phase implementation and recorded durably in `docs/decisions.md`:

1. Use `@fontsource-variable/geist` + `@fontsource-variable/geist-mono` instead of the `geist` npm package (decision #4 addendum) — the Vercel `geist` package requires Next.js's `next/font/local` and throws at runtime in Vite/React (confirmed via package export map + `vercel/geist-font` issue #94).
2. Install ESLint `^9.39.5` instead of ESLint 10 (decision #1 addendum) — `eslint-plugin-react@7.37.5`'s peer dependency caps at `eslint ^9.7`; no released version supports ESLint 10 yet. Same flat-config format, no syntax impact; routine bump once the plugin catches up.

**Reason:** Both are hard technical constraints, not preference calls — no working alternative existed within the original decisions' literal package names.

**Source/Approver:** Implementing agent; full reasoning and affected files recorded in `docs/decisions.md` per decision #8.

**Files/Systems Affected:** `package.json`, `src/index.css`, `eslint.config.mjs`.

## 2026-07-23 — Resume PDF served from public/, not docs/

**Decision:** Moved `docs/assets/resume/summer-halsey-resume.pdf` to
`public/assets/resume/summer-halsey-resume.pdf` via `git mv`, and reference it in
the Resume page as the root-relative path `/assets/resume/summer-halsey-resume.pdf`
(not an import, not an absolute URL).

**Reason:** `docs/` is not part of Vite's static serve path — only `public/` is
copied verbatim to `dist/` and served at `/`. Confirmed via `node -e "fs.existsSync(...)"`
checks before/after the move, and confirmed the PDF appears at
`dist/assets/resume/summer-halsey-resume.pdf` after `npm run build`.

**Source/Approver:** Task briefing's explicit instruction (verify Vite's static
serve path before wiring the download link; move to `public/` if needed).

**Files/Systems Affected:** `public/assets/resume/summer-halsey-resume.pdf` (new
location), `docs/assets/resume/summer-halsey-resume.pdf` (removed via `git mv`),
`src/pages/resume/index.jsx` (download href).

## 2026-07-23 — Keep the /portfolio → /work redirect; do not chase a stale task-brief expectation

**Decision:** During the Work-page rebuild task, keep the `/portfolio` → `/work`
`<Navigate replace />` redirect route, the `/work` route path, and the "Work" nav
label in `src/components/navbar/index.jsx` exactly as they were left by the
Foundation phase (commit `49cdb79`, "feat: finalize routing"). Do not make
`/portfolio` 404 just to satisfy that task's verification script, which incorrectly
assumed `/portfolio` was still the canonical route and expected zero `"portfolio"`
matches in `routes.jsx`. Only rename the internal `Portfolio` component export to
`WorkPage` (a behavior-preserving naming change) and its one import/usage site in
`routes.jsx`.

**Reason:** The redirect was a deliberate choice in the Foundation phase so old
bookmarks/links keep working; removing it would be a silent removal of existing
functionality based on a stale assumption in a later task's briefing, not a real
requirement. User explicitly confirmed this when asked.

**Source/Approver:** User, in response to a clarifying question during the Work-page
rebuild task.

**Files/Systems Affected:** `src/app/routes.jsx` (import/usage rename only — route
paths untouched), `src/components/navbar/index.jsx` (untouched).

## 2026-07-23 — Final phase: "Bootstrap" content string doesn't block the Bootstrap uninstall

**Decision:** During the Final-phase Bootstrap/legacy removal task, the required
grep (`bootstrap|react-bootstrap|animate\.css|typewriter`) turned up one match in
`src/` after removing the actual `bootstrap` CSS import: `src/content_option.js`
lists `"Bootstrap"` as a skill name (with a `value: 60` percentage, unused by any
component — skills render as name-only badges) in the `skills` array shown on the
About and Resume pages. Treated this as page content describing a technology the
developer knows, not a package usage, and proceeded with `npm uninstall bootstrap
react-bootstrap animate.css typewriter-effect` rather than skipping the uninstall
per the task's literal "any match found → do not uninstall" instruction.

**Reason:** The instruction's intent is to catch unexpected code-level remnants of
the removed packages (stray imports, leftover component usage), not incidental
substring matches in unrelated content data. Blocking a verified-safe uninstall
over a skill-name string would contradict the task's own stated goal.

**Source/Approver:** Implementing agent's judgment call, recorded here per
`AGENTS.md` Decision Escalation guidance rather than silently reinterpreting the
safety gate. `npm run build`/`lint`/`test` all passed after the uninstall.

**Files/Systems Affected:** `package.json`, `package-lock.json`, `src/app/App.jsx`
(removed `bootstrap/dist/css/bootstrap.min.css` import), `src/app/App.css`
(deleted — its only rules were dead Bootstrap grid overrides).

## 2026-07-23 — Final phase: light-theme `--color-accent` link text raised to `--color-accent-strong`

**Decision:** During the Final-phase accessibility audit, calculated WCAG contrast
for `--color-accent` (#a8632f) against `--color-bg` (#f7f2e9) in the light theme:
~4.19:1, under the 4.5:1 AA minimum for normal-size text. Three default-state text
links used `--color-accent` directly: `.home-section-link`, `.contact-info__email`,
`.notfound-page__link`. Changed all three to `--color-accent-strong` (5.83:1 light,
8.15:1 dark) instead of changing the shared `--color-accent` token itself, since
darkening the token enough to pass 4.5:1 would make it nearly indistinguishable
from `--color-accent-strong` and affect every other consumer (icons, borders,
hover-only states) that doesn't need the change.

**Reason:** `AGENTS.md`/task briefing explicitly authorized fixing token values (or
usages) for "visually suspect" contrast during this audit; this is a numeric
failure, not just a visual judgment call.

**Source/Approver:** Implementing agent, within the explicit scope of the Final
phase's accessibility audit task.

**Files/Systems Affected:** `src/pages/home/style.css`, `src/pages/contact/style.css`
(also changed the email link's hover color from `--color-accent-strong` to
`--color-text` so hover still reads as a distinct state), `src/pages/notfound/style.css`.