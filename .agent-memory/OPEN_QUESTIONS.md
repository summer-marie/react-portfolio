# Open Questions

## 2026-07-23 — No ESLint configuration exists

**Question:** `AGENTS.md` Section 10 requires `npm run lint` to pass before handoff, but no ESLint configuration or `lint` script exists anywhere in the repository.

**Why it matters:** The required verification suite cannot fully pass without a lint script; installing/configuring ESLint was explicitly out of scope for this task ("do not introduce unrelated tooling").

**Work blocked by it:** Full compliance with the "Required Verification Before Handoff" checklist.

**Safe work that can continue:** Vitest and Playwright installation, configuration, and smoke tests are unaffected and were completed.

**Resolution:** Unresolved. Recommend a dedicated `chore/configure-eslint` task if the user wants lint enforced.
