### Summer Halsey — Portfolio

Personal portfolio site for Summer Halsey, a full-stack engineer. Built with React and Vite, showcasing featured projects, engineering approach, and background.

**Live site:** [shalsey.dev](https://shalsey.dev)

### Features

- Multi-page layout (Home, Work, About, Résumé, Contact) with animated page transitions
- Light/dark theme toggle
- Fully responsive design
- Working contact form (EmailJS)
- Accessible, semantic markup with per-page SEO metadata
- Unit and end-to-end test coverage (Vitest, Playwright)

### Tech Stack

- **React 18** + **Vite**
- **React Router** for client-side routing
- **Framer Motion** for animation
- **Tailwind CSS** for styling
- **EmailJS** for the contact form
- **Vitest** + **React Testing Library** for unit tests, **Playwright** for end-to-end tests
- Deployed on **Vercel**

### Getting Started

```bash
git clone https://github.com/summer-marie/react-portfolio.git
cd react-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run tests:

```bash
npm run test          # unit tests
npm run test:e2e      # end-to-end tests
```

### Project Structure

Page content (project list, bio, skills, contact info, etc.) is centralized in `src/content_option.js` — most content updates only require editing that one file. Pages live under `src/pages`, shared UI in `src/components`.

### Credits

Originally scaffolded from [ubaimutl/react-portfolio](https://github.com/ubaimutl/react-portfolio), since substantially rewritten and redesigned.
