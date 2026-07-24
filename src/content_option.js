// Import project images
import verityLanding from "./assets/images/verity/landing.jpg";
import verityWorkspace from "./assets/images/verity/workspace.jpg";

import familySyncLanding from "./assets/images/family-sync/landing.jpg";
import familySyncFaq from "./assets/images/family-sync/faq.jpg";

import linkGuardLanding from "./assets/images/link-guard/landing.jpg";
import linkGuardFeatures from "./assets/images/link-guard/features.jpg";

import skincareHome from "./assets/images/skincare-lab/home.jpg";
import skincareProducts from "./assets/images/skincare-lab/products.jpg";
import skincareRoutine from "./assets/images/skincare-lab/routine.jpg";

// Profile image
import profileImage from "./assets/images/image5.png";

// Navbar (brand link), Footer (name + copyright)
const logoText = "SummerHalsey";

// title: <title>/og:title on Home only ("Work | ", "About | ", etc. prefix the
// title on every other page, but their base value is this same meta.title).
// description: Home hero tagline, Work header tagline, Footer tagline — used
// on 3 pages. NOT used for the per-page SEO <meta name="description"> tags;
// those are separate 150-160 char strings hardcoded in each page's Helmet
// block (see PAGE_DESCRIPTION in each src/pages/*/index.jsx).
const meta = {
  title: "Summer Halsey",
  description:
    "Full-Stack Engineer solving real-world problems through software, AI, and client collaboration.",
};

// Contact (form submission target + email/description display), Home (CTA
// section email + description), Footer (email link) — used on 3 pages.
const contactConfig = {
  YOUR_EMAIL: "summer.halsey0318@gmail.com",
  description:
    "I'd love to hear from you! Whether you have a project in mind, want to discuss collaboration opportunities, or just want to connect about web development, feel free to reach out. I'm always excited to work on new challenges and meet fellow developers.",
  YOUR_SERVICE_ID: "service_4tz1k7s",
  YOUR_TEMPLATE_ID: "template_yeyoecj",
  YOUR_USER_ID: "RWa_z8LLUwpm4FOHJ",
};

// title: Home hero heading. description: About bio paragraph. your_img_url:
// About profile portrait. Used across 2 pages.
const introData = {
  title: "I’m Summer Halsey",
  description:
    "I'm a full-stack engineer who enjoys solving complex problems with thoughtful software. I work directly with clients to understand their challenges, design practical solutions, and build production-ready applications that are secure, maintainable, and designed around the people who use them.",
  your_img_url: profileImage,
};

// title: About heading, also the Home "How I Work" section heading.
// aboutMe: About bio paragraph, also reused (first sentence only) as the
// Resume page tagline. homeSummary: dedicated 2-3 sentence version for the
// Home "How I Work" section - purpose-built for Home, not a truncation of
// aboutMe (Home and About serve different purposes). Used on 3 pages.
const dataAbout = {
  title: "How I Work",
  aboutMe:
    "Every project starts with understanding the problem—not the technology. I enjoy learning how people work, identifying operational challenges, and designing systems that are reliable, maintainable, and built for long-term success. My experience spans client collaboration, AI-assisted applications, systems architecture, testing, deployment, and technical documentation. I'm most energized by projects where the requirements are still evolving and thoughtful engineering, communication, and adaptability are just as important as writing code.",
  homeSummary:
    "I build software by understanding the problem first, then designing solutions that are secure, maintainable, and genuinely useful. I care as much about how a system is documented and tested as how it's built, because software people can trust matters more than software that just works.",
};

// About (education list), Resume (education timeline) — used on 2 pages.
const education = [
  {
    certification: "Full Stack Developer Certification",
    where: "Persevere Code Camp",
    date: "6/2025",
  },
    {
    certification: "AI Assisted Software Engineering",
    where: "Next Chapter",
    date: "7/2026",
  },
];

// About, Resume — rendered as labeled columns on both pages (name-only
// items, no percentage bars, by design — see docs/00-project-vision.md
// anti-goals). Layout reference: docs/wireframes/about-1440.png and
// resume-1440.png "Expertise & Tooling" section.
const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "Prisma", "PostgreSQL"],
  },
  {
    category: "AI & Architecture",
    items: ["OpenAI APIs", "RAG", "OCR Pipelines", "System Design"],
  },
  {
    category: "Engineering",
    items: ["Testing", "Git", "Vercel", "Documentation"],
  },
];

// Home ("How I Work" section), About ("Strengths" section) — used on 2 pages.
const strengths = [
  {
    title: "Customer-Focused Engineering",
    description:
      "I enjoy working directly with people to understand how they work before proposing technical solutions. Whether modernizing an existing workflow or building a new product from scratch, I focus on translating operational challenges into software that is practical, maintainable, and genuinely useful.",
  },
  {
    title: "AI & Retrieval Systems",
    description:
      "I build AI-assisted applications that prioritize accuracy, transparency, and maintainability. My experience includes retrieval-augmented generation (RAG), document processing pipelines, prompt engineering, and designing systems that provide grounded responses instead of unreliable AI-generated content.",
  },
  {
    title: "Systems Architecture",
    description:
      "I enjoy designing software before writing code. From data models and API boundaries to deployment strategies and security considerations, I create architectures that are easy to extend, test, and maintain as projects grow.",
  },
  {
    title: "Documentation-First Development",
    description:
      "I believe good documentation is an engineering feature, not an afterthought. I create architecture documents, implementation plans, setup guides, and technical handoffs that help both clients and developers understand, maintain, and evolve a system with confidence.",
  },
  {
    title: "Quality & Testing",
    description:
      "Reliable software comes from deliberate engineering practices. I incorporate automated testing, validation, structured logging, and thoughtful debugging into my workflow to build applications that are dependable in production—not just functional during development.",
  },
  {
    title: "Security & Production Mindset",
    description:
      "I design applications with security and long-term reliability in mind. From authentication and authorization to input validation, rate limiting, privacy, and deployment, I approach software as something people will trust with real work and real data.",
  },
];

// Home (first 3, "Selected Work" section), Work (full list + image carousel)
// — used on 2 pages.
const projects = [
  {
    images: [verityLanding, verityWorkspace],
    title: "Verity",
    description:
      "Privacy-first web app that translates probation and parole supervision documents into plain language, using AI grounded only in the documents a user uploads.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Tailwind CSS"],
    link: "https://github.com/summer-marie/conditions-translator",
  },
  {
    images: [familySyncLanding, familySyncFaq],
    title: "Family Sync",
    description:
      "A privacy-first family calendar hub that combines everyone's Google Calendar into one shared view and answers natural-language scheduling questions without oversharing event details.",
    technologies: ["Next.js", "Prisma", "Neon Postgres", "Auth.js", "Google Calendar API", "Vercel AI SDK"],
    link: "https://github.com/summer-marie/family-sync",
  },
  {
    images: [linkGuardLanding, linkGuardFeatures],
    title: "LinkGuard",
    description:
      "Affiliate link monitoring for creators — watches links around the clock and sends instant Discord or SMS alerts the moment a product 404s or goes out of stock, with self-healing fallback redirects.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Neon Postgres", "Auth.js"],
    link: "https://github.com/summer-marie/link-guard",
  },
  {
    images: [skincareHome, skincareProducts, skincareRoutine],
    title: "SkinScript",
    description:
      "A gender-neutral skincare guide for teens that scans product barcodes, flags conflicting active ingredients, and builds personalized AM/PM routines.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/summer-marie/skincare-lab",
  },
];

// Navbar, Footer (icon links) — used on 2 components (rendered on every page).
const socialProfiles = {
  github: "https://github.com/summer-marie",
  // facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/summer-halsey-673124372/",
  // twitter: "https://twitter.com",
};
export {
  meta,
  dataAbout,
  projects,
  education,
  skills,
  strengths,
  introData,
  contactConfig,
  socialProfiles,
  logoText,
};
