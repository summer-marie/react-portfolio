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

**Resolution:** Unresolved. Recommend the user decide whether to remove `Socialicons`, keep both, or fold its behavior (e.g., scroll-linked visibility) into the Footer/Navbar during a later page-content or polish phase.
