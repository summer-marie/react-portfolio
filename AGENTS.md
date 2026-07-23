# AGENTS.md

## Purpose

This file defines the shared operating rules for every coding agent working in this repository, including Claude Code, GitHub Copilot, Codex, and other automated development tools.

All agents must read this file before changing code, documentation, configuration, tests, or Git history.

AGENTS.md is the canonical shared policy. Tool-specific instruction files may add constraints, but they must not weaken or contradict this file.

## 1. Operating Mode

Agents may work autonomously within the scope of an approved task.

### Agents must

- Read the required project documentation before implementation.
- Follow existing architecture, design tokens, component patterns, and naming conventions.
- Ask before making material decisions that are not already resolved in the documentation.
- Continue independently through routine implementation details that follow established patterns.
- Keep changes limited to the current task.
- Test all affected behavior.
- Maintain shared session-memory files throughout the task.
- Commit and push completed work to a dedicated remote branch.

### Agents must not

- Expand scope without approval.
- Replace established architecture or tooling without approval.
- Make product, visual-design, dependency, data-model, or API-contract decisions silently.
- Merge branches.
- Push directly to the default branch.
- Open or merge pull requests without explicit instruction.
- Delete user work or unrelated files.
- Rewrite Git history unless explicitly instructed.

### Decision Escalation

Ask the user before making decisions involving:

- New production dependencies
- Architecture or framework changes
- Public API or data-model changes
- Major component or page restructuring
- Visual direction that is not covered by the design documents
- Accessibility tradeoffs
- Security or privacy behavior
- Removal of existing functionality
- Scope changes that affect the build plan

Do not interrupt for routine implementation choices when the answer is clear from existing documentation or repository patterns.

When the user is unavailable:

- Record the question in `.agent-memory\OPEN_QUESTIONS.md`.
- Continue with independent, non-blocked work.
- Do not invent a material decision simply to finish.
- Clearly report any blocked items at handoff.

## 2. Required Reading Order

Before beginning work, read the following files in order when they exist:

1. `AGENTS.md`
2. Tool-specific instructions such as `CLAUDE.md`
3. `.agent-memory\CURRENT_SESSION.md`
4. `.agent-memory\DECISIONS.md`
5. `.agent-memory\OPEN_QUESTIONS.md`
6. `.agent-memory\WORK_LOG.md`
7. `docs\00-project-vision.md`
8. `docs\01-visual-language.md`
9. `docs\02-site-architecture.md`
10. `docs\03-design-system.md`
11. `docs\04-engineering-standards.md`
12. `docs\05-build-plan.md`, when created
13. Relevant source files, tests, and configuration for the current task

If a referenced file does not exist, continue without creating speculative content unless the current task includes creating it.

When instructions conflict, use this priority:

1. Explicit user instruction for the current task
2. `AGENTS.md`
3. Tool-specific instruction file
4. Approved project documents
5. Existing repository conventions
6. Agent preference

## 3. Shared Agent Memory

All agents must use the same shared memory directory:

```
.agent-memory\
├── CURRENT_SESSION.md
├── DECISIONS.md
├── OPEN_QUESTIONS.md
└── WORK_LOG.md
```

Create missing files only when beginning active implementation work.

### CURRENT_SESSION.md

Maintain the current task state:

- Task objective
- Approved scope
- Current branch
- Files being changed
- Tests required
- Work completed
- Work remaining
- Current blockers
- Last verified command and result

Replace stale session content when starting a new task. Do not erase durable decisions or historical work logs.

### DECISIONS.md

Record approved, durable decisions:

- Date
- Decision
- Reason
- Source or approver
- Files or systems affected

Do not record guesses as decisions.

### OPEN_QUESTIONS.md

Record unresolved material questions:

- Date
- Question
- Why it matters
- Work blocked by it
- Safe work that can continue
- Resolution, once answered

Move resolved answers into `DECISIONS.md` when they create a durable project rule.

### WORK_LOG.md

Append a concise chronological log:

- Date and time
- Agent or tool
- Branch
- Work performed
- Files changed
- Tests run and results
- Commit hash
- Push status
- Remaining concerns

Never rewrite prior entries except to correct a factual error.

### Memory Update Timing

Update memory:

- At task start
- After a material decision
- After each coherent implementation milestone
- After tests
- After each commit and push
- Before handoff or stopping

## 4. Git Workflow

### Branches

Create a dedicated branch for each:

- Phase
- Feature
- Test effort
- Bug fix
- Refactor
- Rework
- Documentation change
- Chore

Use these prefixes:

```
feat/
fix/
refactor/
test/
docs/
chore/
rework/
build/
ci/
```

Examples:

```
feat/document-intake
test/prisma-ownership
fix/chat-session-expiry
refactor/ocr-service
docs/update-schema-spec
chore/configure-eslint
rework/account-transfer
```

Agents may:

- Create dedicated branches
- Make local commits
- Push dedicated branches to the configured remote

Agents must not:

- Push directly to the default branch
- Merge branches
- Force-push
- Delete remote branches
- Open or merge pull requests without explicit instruction
- Change remote configuration or credentials

Before starting:

```powershell
git status
git branch --show-current
git remote -v
git fetch --prune
```

Create and switch to a branch:

```powershell
git switch -c feat/example-feature
```

Push the dedicated branch:

```powershell
git push -u origin feat/example-feature
```

If the working tree already contains unrelated changes, preserve them and do not include them in the task.

### Staging Discipline

- Stage files individually by name.
- Never use `git add -A`.
- Never use `git add .`.
- Only stage files in scope for the current commit.
- Review staged changes before committing.

Example:

```powershell
git add src\components\ProjectCard.tsx tests\ProjectCard.test.tsx
git diff --cached
git status --short
```

After each commit, report:

- Files included in the commit
- Touched files deliberately left unstaged
- Untracked files deliberately left out
- Commit hash
- Whether the branch was pushed successfully

This prevents leftover working-tree changes from being mistaken for a staging failure.

## 5. Commit Rules

Use small, coherent commits. Do not commit an entire phase or large feature as one oversized commit.

Use conventional prefixes:

```
feat:
fix:
refactor:
test:
docs:
chore:
build:
ci:
perf:
style:
revert:
```

Examples:

```
feat: add temporary document creation flow
test: cover exclusive document ownership constraints
fix: prevent expired sessions from loading documents
refactor: separate OCR validation from provider client
docs: update account ownership specification
chore: ignore generated local files
```

Commit messages must be:

- Descriptive
- Concise
- Understandable to another developer or employer
- Focused on one coherent change

A phase may contain many commits.

Before each commit:

```powershell
git diff
git diff --cached
git status --short
```

Do not commit:

- Secrets
- Environment files containing credentials
- Generated reports unless intentionally tracked
- Playwright traces, videos, or screenshots unless explicitly required
- Build output
- Unrelated user changes

## 6. PowerShell-Only Commands

All commands provided to the user or recorded in project documentation must use PowerShell syntax. Do not provide Bash syntax unless explicitly requested.

Use PowerShell for:

- Package installation
- File creation
- Directory creation
- Environment setup
- Testing
- Database commands
- Git commands
- Local development
- Build commands
- Cleanup

Examples:

```powershell
npm install
npm run dev
npm run build
npm run test
npx prisma generate
npx prisma migrate dev
Copy-Item .env.example .env.local
New-Item -ItemType Directory -Path .agent-memory -Force
```

Use PowerShell path syntax in commands:

```powershell
git add src\components\Button.tsx
```

Code, configuration, and cross-platform paths inside application source files may use the syntax required by that language or tool.

## 7. Testing Standards

Vitest and Playwright are required testing tools for this project.

Before installing anything, inspect:

```powershell
Get-Content package.json
Get-ChildItem
```

If Vitest or Playwright is absent, install and configure them as part of the appropriate setup task. Do not add a competing test framework.

Typical installation:

```powershell
npm install -D vitest @vitest/coverage-v8 jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D @playwright/test
npx playwright install
```

Adjust packages to the actual framework and existing repository setup.

### Vitest

Use Vitest for:

- Unit tests
- Component behavior
- Utility functions
- Hooks
- State logic
- Accessibility assertions that can be verified at component level
- Regression tests for fixed defects

Rules:

- Test observable behavior, not implementation details.
- Add or update tests with every behavior change.
- Keep tests deterministic.
- Mock only true external boundaries.
- Do not weaken assertions simply to make tests pass.
- A bug fix should include a regression test when practical.

Suggested scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

### Playwright

Use Playwright for:

- Critical user journeys
- Navigation
- Theme switching
- Responsive behavior
- Contact flows
- Project-detail navigation
- Keyboard interaction
- Cross-page regressions
- Visual or media placeholders that affect layout

Rules:

- Keep end-to-end tests focused on high-value flows.
- Prefer resilient, accessible selectors such as roles and labels.
- Do not rely on arbitrary timeouts.
- Test at representative desktop and mobile viewport sizes.
- Capture traces, screenshots, or videos on failure through configuration.
- Do not commit generated test artifacts unless explicitly requested.

Suggested scripts:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

### Required Verification Before Handoff

Run the commands that exist for the repository:

```powershell
npm run lint
npm run test
npm run test:e2e
npm run build
```

If a command does not exist or cannot run:

- Do not claim it passed.
- Record the reason in `.agent-memory\WORK_LOG.md`.
- Report the gap clearly at handoff.

All tests must pass before a task is considered complete, unless the user explicitly accepts a documented exception.

## 8. Implementation Standards

Follow `docs\04-engineering-standards.md`. In particular:

- Prefer fluid and intrinsic layouts.
- Prefer `rem`, `em`, `%`, viewport-relative units, and `clamp()`.
- Avoid hard-coded `px` values except where technically justified.
- Use design tokens instead of repeated magic numbers.
- Respect light and dark themes.
- Respect `prefers-reduced-motion`.
- Build accessible keyboard and focus behavior.
- Prefer CSS over JavaScript for presentation and layout.
- Preserve aspect ratios for image and video media.
- Use placeholders for unavailable project imagery or videos rather than blocking implementation.

A justified `px` use may include:

- One-device-pixel borders
- Raster image dimensions
- Tool-required configuration
- Precise test viewport definitions

Document non-obvious exceptions.

## 9. Media Placeholder Rules

When final images, screenshots, or videos are not yet available:

- Build a responsive placeholder with the intended aspect ratio.
- Label the placeholder clearly in development.
- Store expected asset details near the component or in the build plan.
- Do not use copyrighted reference imagery as production content.
- Do not allow missing media to block page structure or responsive testing.
- Keep replacement simple: the final asset should be swappable without layout changes.

Each placeholder specification should include:

- Project name
- Asset type
- Intended location
- Aspect ratio
- Recommended dimensions
- Light/dark requirements
- Alt-text intent
- Whether motion is optional or required

---

# 10. Task Lifecycle

Every autonomous task must follow this lifecycle.

```text
Task Assigned
        │
        ▼
Read Documentation
        │
        ▼
Create Dedicated Branch
        │
        ▼
Implement Approved Scope
        │
        ▼
Run Required Tests
        │
        ▼
Update Agent Memory
        │
        ▼
Create Small Commits
        │
        ▼
Push Branch
        │
        ▼
STOP
        │
        ▼
Notify User
        │
        ▼
User Reviews
        │
        ▼
User Opens/Merges Pull Request
        │
        ▼
User Updates Local Main
        │
        ▼
Next Task Begins
```

### Stop Condition

Once the assigned scope has been completed, tested, committed, and pushed, the agent must stop working.

The agent must not begin another task unless explicitly instructed by the user.

### If the User Is Away

If the user is unavailable, the agent may continue working only within the approved scope of the current task.

The agent should continue making progress independently as long as no material product or architectural decisions are required.

Once the approved scope is complete, or the agent reaches a blocking issue requiring user input, it must:

- Commit all completed work.
- Push the dedicated branch (if commits exist).
- Update all agent memory files.
- Record any unresolved questions in `.agent-memory\OPEN_QUESTIONS.md`.
- Record any failed tests, build errors, or blockers in `.agent-memory\WORK_LOG.md`.
- Report the final status.
- Stop and wait for further instructions.

Do not begin a new feature, refactor, enhancement, or unrelated cleanup simply because additional work is available.

Do not expand the scope without explicit user approval.

### User Responsibilities

After the agent stops, the user is responsible for:

- Reviewing the branch
- Opening or approving the pull request (if applicable)
- Merging into the default branch
- Updating the local repository

Typical workflow:

```powershell
git switch main
git pull origin main
```

The next task should always begin from the latest version of the default branch.

### Branch Rule

One branch = one task.

Do not continue unrelated work on an existing feature branch.

Create a new branch for every:

- Feature
- Bug fix
- Refactor
- Documentation update
- Test effort
- Chore

Unless the user explicitly instructs otherwise.

## 11. Completion and Handoff

A task is complete only when:

- Approved scope is implemented.
- Relevant tests are added or updated.
- Required checks pass.
- Documentation and agent memory are current.
- Changes are split into coherent commits.
- The dedicated branch is pushed.
- Unrelated changes remain untouched.
- Material open questions are clearly listed.

Final handoff must report:

- Branch name
- Summary of completed work
- Commits and hashes
- Files changed
- Tests and build commands run
- Results
- Branch push status
- Deliberately excluded working-tree changes
- Open questions or blocked work
- Any user-supplied media still required

Do not merge. The user will review and merge through GitHub.

## Wireframes

If approved wireframes exist in `docs/wireframes/`, agents must use them as the source of truth for page layout and hierarchy.

Agents should:

- Match the overall layout and proportions.
- Follow the documented visual language instead of copying placeholder styling.
- Preserve responsive behavior using the engineering standards.
- Use placeholders for missing assets.

Do not redesign approved layouts without user approval.