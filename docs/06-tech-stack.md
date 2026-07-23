# Tech Stack

## Architecture Decision

This portfolio will remain a client-side React application built with Vite and React Router.

The project will not migrate to Next.js.

## Rationale

The portfolio does not require server-side rendering, server components, API routes, or framework-specific backend functionality.

Keeping the existing React Router and Vite architecture provides:

* A simpler development model
* A predictable static build
* Easier local debugging
* Fewer deployment-specific behaviors
* Less reliance on hosting-provider dashboards
* Greater portability between hosting platforms

The application should remain deployable as a static single-page application.

## Routing Strategy

Use the existing React Router configuration.

Do not migrate the project to React Router Framework Mode unless the user explicitly approves the architectural change.

Do not introduce:

* Server-side rendering
* React Server Components
* Server actions
* Framework-specific loaders requiring a server runtime
* Vercel Functions
* Next.js
* Remix
* A custom Node server

Client-side route loaders may be used only when they do not require a server runtime.

## Deployment Strategy

The production build should be generated locally with:

```powershell
npm run build
```

The generated static output should remain portable and deployable to any compatible static hosting provider.

Deployment-specific configuration must be kept minimal and committed to the repository.

The application must not depend on settings that exist only inside a hosting-provider dashboard when those settings can reasonably be represented in source control.

## Verification

Before changing the project architecture, agents must inspect:

```powershell
Get-Content package.json
Get-ChildItem
```

Agents must preserve the existing package manager, build tool, routing mode, and directory structure unless the user explicitly approves a change.

Any proposed architectural migration must be recorded in `.agent-memory\OPEN_QUESTIONS.md` and must not be implemented without user approval.
