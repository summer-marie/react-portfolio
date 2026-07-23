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