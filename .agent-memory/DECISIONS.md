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