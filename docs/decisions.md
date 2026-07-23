# Architecture & Product Decisions

This file is the **durable source of truth** for approved architectural and product
decisions (per `AGENTS.md` and the project's Decision Records policy).

`.agent-memory/DECISIONS.md` is agent working memory. Any important decision recorded
there must also be reflected here.

Each entry records: date, decision, reason, source/approver, and affected files or systems.

---

## 2026-07-23 — Portfolio V1 architecture review approved

**Source/Approver:** User, approving the Phase 1 architecture review.

The Phase 1 architecture review (read-only assessment) was approved. The portfolio will
undergo a clean migration from the legacy Bootstrap template to the documented V1
architecture, keeping the existing React + Vite + React Router SPA foundation
(see "React Architecture" in `.agent-memory/DECISIONS.md` and `docs/06-tech-stack.md`).

The nine decisions below resolve the open questions raised in that review.

---

### 1. Styling and dependency stack

**Decision:** Adopt the documented target stack:

- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint (project dev dependency)
- Prettier (project dev dependency)

Install all required dependencies, consulting up-to-date documentation on the web where
needed. ESLint and Prettier must be listed in `package.json` as `devDependencies`; the
VS Code Prettier/ESLint extensions do not count as repository dependencies.

**Do not** initialize shadcn/ui during the foundation phase. Build the small set of
documented primitives directly first. shadcn/ui may be added later only if a clear need
appears.

**Reason:** Aligns implementation with `docs/04-build-plan.md` Phase 1 and
`docs/01-visual-language.md`. Deferring shadcn/ui keeps the foundation minimal and
under direct control.

**Files/Systems affected:** `package.json`, Tailwind/PostCSS config, ESLint/Prettier
config, design-token layer, primitive components.

---

### 2. Routing

**Decision:**

- Use `/work` as the canonical route.
- Add a redirect from `/portfolio` to `/work` so existing links keep working.
- Use the documented navigation labels: Home, Work, About, Resume, Contact.
- Add a proper not-found (404) route instead of rendering Home for all unmatched paths.

**Reason:** Matches `docs/02-site-architecture.md` and the approved wireframes
(`docs/wireframes/work-1440.png`). The redirect preserves inbound links; a real 404
is correct behavior.

**Files/Systems affected:** `src/app/routes.jsx`, header/navigation components, new
NotFound page.

---

### 3. Bootstrap migration

**Decision:** Remove Bootstrap and React Bootstrap **incrementally**. Do not uninstall
them before replacement components and layouts exist. Migration sequence:

1. Build the new token and layout foundation.
2. Replace Bootstrap-dependent components.
3. Confirm no remaining imports or usage.
4. Remove Bootstrap and React Bootstrap from dependencies.

Apply the same incremental approach to legacy animation and typewriter dependencies
(`animate.css`, `typewriter-effect`, `react-transition-group`).

**Reason:** Bootstrap and its global CSS are imported app-wide; removing them before
replacements exist would break every page simultaneously.

**Files/Systems affected:** `package.json`, all pages/components currently importing
Bootstrap/react-bootstrap and the legacy animation libraries.

---

### 4. Fonts

**Decision:** Replace Marcellus and Raleway with **Geist** and **Geist Mono**. Prefer a
repository-managed or self-hosted installation over a CDN; the `geist` npm package is
acceptable. Font usage must follow `docs/01-visual-language.md`.

**Reason:** `docs/01-visual-language.md` specifies Geist/Geist Mono. Self-hosting removes
an external runtime dependency and improves portability/performance.

**Files/Systems affected:** `index.html` (remove Google Fonts links), `package.json`,
`src/index.css`/token layer, typography tokens.

---

### 5. EmailJS

**Decision:** Keep the existing EmailJS implementation during the migration. Do **not**
refactor the EmailJS configuration to environment variables at this time.

Requirements when touching the contact form:

- Preserve existing EmailJS behavior; maintain compatibility with the current config.
- Add loading, success, and error states.
- Disable the submit button while sending.
- Provide accessible status messaging.
- Do not introduce changes that require hosting-provider access.

**Reason:** The Vercel project cannot currently be accessed (two-factor authentication on
another device), so deployment configuration cannot be modified during this migration.
The objective is to rebuild architecture and UI, not to change a working deployment.
Migrating EmailJS config to environment variables will be handled later as a separate
maintenance task once hosting access is restored.

**Files/Systems affected:** `src/pages/contact/`, `src/content_option.js` (EmailJS IDs
remain in place for now).

---

### 6. Resume PDF

**Decision:** Build the Resume page as an HTML-first experience. The final résumé PDF is
not available; use a clearly identified placeholder for the download action until the real
file is provided. Do not create fictional résumé content or generate a fake final PDF.

**Reason:** `docs/02-site-architecture.md` specifies HTML-first with a secondary PDF
download; the real asset is a pending user-supplied deliverable.

**Files/Systems affected:** new Resume page/route, media placeholder tracking in
`docs/04-build-plan.md`.

---

### 7. Documentation corrections (stale filename references)

**Decision:** Create a small, documentation-only task to correct stale filename references
in `docs/README.md` and `docs/wireframes/README.md`. This task must happen **before**
application implementation begins.

**Reason:** Both files still cite the pre-rename filenames (`03-design-system.md`,
`04-engineering-standards.md`, `05-build-plan.md`) — the same class of error corrected in
`AGENTS.md` during Phase 0. Documentation should be consistent before implementation.

**Files/Systems affected:** `docs/README.md`, `docs/wireframes/README.md`.

---

### 8. Decision records

**Decision:** Use `docs/decisions.md` (this file) as the durable source of truth for
approved architectural and product decisions. Use `.agent-memory/DECISIONS.md` as agent
working memory. Any important decision recorded in agent memory must also be reflected
here.

**Reason:** Removes ambiguity between the empty `docs/decisions.md` and the populated
`.agent-memory/DECISIONS.md`.

**Files/Systems affected:** `docs/decisions.md`, `.agent-memory/DECISIONS.md`.

---

### 9. Foundation direction (clean migration)

**Decision:** Proceed with a clean migration rather than preserving legacy visual behavior.
Remove the following legacy elements during the appropriate foundation or component task:

- Custom cursor (`src/hooks/AnimatedCursor.jsx`)
- Vertical section-navigation rail (`src/components/navigation/`)
- Skill percentage bars (in `src/pages/about/`)
- Large hero headshot background (in `src/pages/home/`)
- Orphan entry-point files (`src/index.jsx`, `src/reportWebVitals.js`)
- Empty bottom-navigation component (`src/components/bottomnav/`)
- Legacy full-height slide transitions (`src/app/App.css`)

Do not make unrelated page-content changes during the foundation phase.

**Reason:** Several legacy elements conflict with the documented anti-goals, accessibility
requirements, and information architecture. A clean migration avoids carrying template
cruft into V1.

**Files/Systems affected:** the files listed above, plus `src/app/App.jsx` and route
configuration.
