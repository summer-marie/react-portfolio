// Import project images
import capstoneAbout from "./assets/images/capstone/about.jpg";
import capstoneDashboard from "./assets/images/capstone/dashboard.jpg";
import capstoneIngredients from "./assets/images/capstone/ingredients.jpg";
import capstoneMenu from "./assets/images/capstone/menu.jpg";
import capstoneMessages from "./assets/images/capstone/messages.jpg";

// Import interval timer images
import intervalScreenOne from "./assets/images/interval-timer/screen-one.jpg";
import intervalTimerScreen from "./assets/images/interval-timer/timer-screen.jpg";
import intervalSetBreak from "./assets/images/interval-timer/set-break.jpg";

// Profile image
import profileImage from "./assets/images/image5.png";

const logoText = "SummerHalsey";

const meta = {
  title: "Summer Halsey",
  description:
    "I’m Summer Halsey — Full Stack Developer with a data-driven mindset",
};

const contactConfig = {
  YOUR_EMAIL: "summer.halsey0318@gmail.com",
  description:
    "I'd love to hear from you! Whether you have a project in mind, want to discuss collaboration opportunities, or just want to connect about web development, feel free to reach out. I'm always excited to work on new challenges and meet fellow developers.",
  YOUR_SERVICE_ID: "service_4tz1k7s",
  YOUR_TEMPLATE_ID: "template_yeyoecj",
  YOUR_USER_ID: "RWa_z8LLUwpm4FOHJ",
};

const introData = {
  title: "I’m Summer Halsey",
  animated: {
    first: "Always curious, sometimes failing, always moving forward.",
    second: "I enjoy turning ideas into interactive React experiences.",
    third: "Turning complex business logic into intuitive user experiences.",
    fourth: "I use AI as a tool, not a crutch.",
  },
  description:
    "From MongoDB schemas to React components, I now build with a production mindset—prioritizing security, fast-loading UIs, and a smooth user experience. I love using tools like Jest and React Testing Library to keep my code solid, and I rely on things like Argon2 hashing and express-validator to keep things secure. Whether I'm working with Vite, Tailwind, or setting up structured logging with Pino, I'm all about creating apps that are reliable, maintainable, and a joy to use from database to interface.",
  your_img_url: profileImage,
};

const dataAbout = {
  title: "My Purpose",
  aboutMe:
    "Eager to contribute my skills and passion, I'm a full stack developer with a strong affinity for creating dynamic user experiences through React and building robust database systems. My recent immersive training has equipped me with a solid foundation in modern web development practices, and I'm excited to apply and expand my knowledge in a collaborative environment.",
};
const education = [
  {
    certification: "Full Stack Developer Certification",
    where: "Persevere Code Camp",
    date: "6/2025",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 75,
  },
  {
    name: "React",
    value: 90,
  },
  {
    name: "TailwindCSS",
    value: 80,
  },
  {
    name: "Bootstrap",
    value: 60,
  },
  {
    name: "Node.js & Express.js",
    value: 85,
  },
  {
    name: "MongoDB Atlas",
    value: 95,
  },
  {
    name: "Redux Toolkit",
    value: 90,
  },
];

const strengths = [
  {
    title: "Production-Ready Backend Engineering",
    description:
      "I have strong expertise in building robust, scalable backends using modern frameworks like Express and MongoDB. My approach includes event-driven structured logging with Pino, automated background tasks with cron jobs, and comprehensive rate limiting and endpoint-level validation to ensure security and reliability. I design backend systems that are maintainable, efficient, and ready for production—supporting seamless integration and smooth operation at scale.",
  },
  {
    title: "Style & UI/UX Design",
    description:
      "I have strong expertise in designing responsive, user-focused interfaces using modern tools like Tailwind CSS and systematic design patterns. I prioritize clear visual hierarchy, consistent layouts, and accessible components to create intuitive experiences across all devices. My approach combines thoughtful color schemes, scalable typography, and strategic use of space to guide users naturally—even through complex data. I’m constantly improving my ability to have the website match my internal vision, always striving to learn new practices and techniques.",
  },
  {
    title: "Security-Driven Full-Stack Development",
    description:
      "I have strong expertise in building security-first full-stack applications, implementing layered authentication with JWT and session strategies to support diverse user needs. I consistently use Argon2 for password hashing, enforce rate limiting, and apply XSS protection and input validation across the stack. My approach includes role-based access controls, secure session management, and data redaction in logs to safeguard sensitive information. I prioritize proactive threat mitigation and strive for seamless, secure user experiences in every project I build",
  },
];

// TODO: turn photos into carousel. make card container larger to fit more content
const projects = [
  {
    images: [intervalScreenOne, intervalTimerScreen, intervalSetBreak],
    title: "Intervals Timer (Workout)",
    description:
      "A workout intervals timer built with React and Tailwind CSS. Fixes the problem of having to look at watch while you workout.",
    technologies: ["React", "Tailwind CSS", "Mobile Compatible"],
    link: "https://github.com/summer-marie/intervals-timer",
  },
  {
    images: [
      capstoneAbout,
      capstoneDashboard,
      capstoneIngredients,
      capstoneMenu,
      capstoneMessages,
    ],
    title: "Capstone - Pizza Ordering System",
    description:
      "Full-stack pizza ordering app with admin management system built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit"],
    link: "https://github.com/summer-marie/capstone-pizza", // Link to GitHub repo
  },
];

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
