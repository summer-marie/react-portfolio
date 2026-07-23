# Current Session

## Task Objective

Phase — Foundation: install approved tooling (Tailwind, Framer Motion, Lucide, ESLint,
Prettier, Geist fonts), replace the styling foundation with a design-token system, fix
the ThemeToggle first-load bug, and remove legacy elements per `docs/decisions.md`
decision #9. No page layout, navigation, footer, or Bootstrap removal in this task.

## Approved Scope

- Install Tailwind CSS + PostCSS, Framer Motion, Lucide React, ESLint, Prettier, and
  self-hosted Geist fonts.
- Replace `src/index.css` with a complete design-token system (color, typography,
  spacing, radius, shadow, motion, layout, z-index).
- Fix `ThemeToggle`'s first-load `data-theme="null"` bug.
- Remove: custom cursor, vertical section-nav rail, empty bottomnav, orphan entry files
  (`src/index.jsx`, `src/reportWebVitals.js`), legacy full-height slide transition.
- Configure ESLint (flat config) and Prettier; add `lint`/`lint:fix`/`format` scripts.
- Remove Google Fonts links from `index.html`.
- Out of scope: `src/pages/`, `src/header/`, `src/components/socialicons/`, Bootstrap
  removal, EmailJS, Resume page, route changes, shadcn/ui.

## Current Branch

`feat/foundation-tokens-and-tooling`

## Files Being Changed

- `package.json`, `package-lock.json`
- `postcss.config.mjs` (new)
- `eslint.config.mjs` (new)
- `.prettierrc`, `.prettierignore` (new)
- `src/index.css` (full token replacement)
- `src/app/App.jsx`, `src/app/App.css`
- `src/main.jsx` (font imports)
- `src/components/themetoggle/index.jsx`
- `index.html`
- `docs/decisions.md`, `.agent-memory/DECISIONS.md`, `.agent-memory/OPEN_QUESTIONS.md`
- `docs/implementation-checklist.md`
- Deleted: `src/hooks/AnimatedCursor.jsx`, `src/components/navigation/`,
  `src/components/bottomnav/`, `src/index.jsx`, `src/reportWebVitals.js`

## Tests Required

`npm run build`, `npm run lint`, `npm run test`, `npm run test:e2e` — all required to
pass (or documented) per `AGENTS.md` §7.

## Work Completed

- Verified all package versions against the npm registry before installing (none had
  moved since the Phase-2-prompt-drafting research).
- Installed Tailwind CSS 4.3.3 + `@tailwindcss/postcss` + PostCSS, Framer Motion 12.42.2,
  Lucide React 1.26.0, `@fontsource-variable/geist`/`geist-mono` 5.3.0.
- Hit an ERESOLVE conflict installing ESLint 10 (`eslint-plugin-react@7.37.5` peer-caps at
  `eslint ^9.7`) — resolved by installing ESLint 9.39.5 instead (same flat-config format).
  Documented as a decision addendum in `docs/decisions.md` and `.agent-memory/DECISIONS.md`.
- Documented the `geist` → `@fontsource-variable/geist*` substitution (Vercel's `geist`
  package requires Next.js's `next/font/local` and doesn't run under Vite) the same way.
- Replaced `src/index.css` with the full token system; kept the seven legacy variable
  names (`--bg-color`, `--primary-color`, etc.) aliased to new tokens so untouched
  component CSS in `src/pages/`, `src/header/`, etc. keeps resolving correctly.
- Fixed `ThemeToggle`'s initializer to default to `"dark"`.
- Removed all six legacy items; updated `App.jsx` accordingly; confirmed via grep no
  remaining references to deleted files/`cursor: none`.
- Configured `eslint.config.mjs` (flat config): React + hooks + refresh rules,
  `no-unused-vars`/`no-console` as errors, `eslint-config-prettier` last. Disabled
  `react/prop-types` (no PropTypes library used anywhere in this codebase). Added a
  scoped override downgrading `src/pages/`, `src/header/`, `src/components/socialicons/`
  to warnings (documented — those files are out of scope for this task; see
  `docs/implementation-checklist.md` Discovered Tasks).
- Fixed a genuine `react-hooks/rules-of-hooks` violation in `App.jsx` (renamed
  `_ScrollToTop` → `ScrollToTopBase` — leading underscore broke the naming convention
  the rule checks; in-scope file, no behavior change).
- Configured Prettier (`.prettierrc`, `.prettierignore`); ran `prettier --write` only on
  files touched in this task (not the whole repo, to avoid touching out-of-scope files).
- Hit a build-time issue: `@import`ing the Fontsource CSS through `src/index.css` (which
  goes through `@tailwindcss/postcss`'s Lightning CSS engine) left the nested woff2
  `url()`s unresolved in the `dist` output. Fixed by moving the two Fontsource imports to
  `src/main.jsx` (plain Vite CSS pipeline), which correctly hashes and copies the font
  files into `dist/assets`.
- Ran full verification suite: build (pass), lint (0 errors / 11 warnings, all in
  documented out-of-scope files), test (pass), test:e2e (pass).
- Manually verified via a throwaway Playwright script against the dev server:
  `data-theme="dark"` on first load, Geist Variable font applied, native cursor restored
  (`cursor: auto`), zero console errors.
- Updated `docs/implementation-checklist.md` (`[x] Design Tokens` under Foundation; two
  Discovered Tasks appended).
- Resolved the long-standing `.agent-memory/OPEN_QUESTIONS.md` "No ESLint configuration"
  entry.

## Work Remaining

- Commit in small coherent commits and push.

## Current Blockers

None.

## Last Verified Command and Result

`npm run test:e2e` — passed (1/1, home page loads via Playwright/Chromium).
