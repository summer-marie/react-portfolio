# Open Questions

## 2026-07-23 — No ESLint configuration exists

**Question:** `AGENTS.md` Section 10 requires `npm run lint` to pass before handoff, but no ESLint configuration or `lint` script exists anywhere in the repository.

**Why it matters:** The required verification suite cannot fully pass without a lint script; installing/configuring ESLint was explicitly out of scope for this task ("do not introduce unrelated tooling").

**Work blocked by it:** Full compliance with the "Required Verification Before Handoff" checklist.

**Safe work that can continue:** Vitest and Playwright installation, configuration, and smoke tests are unaffected and were completed.

**Resolution:** Resolved 2026-07-23 in the Foundation phase (`feat/foundation-tokens-and-tooling`). ESLint (flat config, `eslint.config.mjs`) and Prettier are now configured with `lint`/`lint:fix`/`format` scripts in `package.json`. `npm run lint` passes with 0 errors (11 warnings scoped to not-yet-migrated legacy files — see `docs/implementation-checklist.md` Discovered Tasks).
