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

const logoText = "SummerHalsey";

const meta = {
  title: "Summer Halsey",
  description: "I’m Summer Halsey data scientist _ Full stack developer",
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
    first: "I craft React apps with passion",
    second: "I find beauty in well-structured data",
    third: "I strive to make complex web simple",
    fourth: "I thrive building fullstack solutions",
  },
  description:
    "From MongoDB schemas to React components, I love every layer of fullstack development. Give me a messy dataset and I'll show you the patterns hidden inside—then build you an app that makes accessing that data feel like magic. I'm passionate about creating complete solutions that work beautifully from database to user interface. I'm eager to contribute my developing web development skills.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataAbout = {
  title: "My Purpose",
  aboutMe:
    "Eager to contribute my skills and passion, I'm a full stack developer with a strong affinity for creating dynamic user experiences through React and building robust database systems. My recent immersive training has equipped me with a solid foundation in modern web development practices, and I'm excited to apply and expand my knowledge in a collaborative environment.",
};
const education = [
  {
    certification: "Full Stack Developer Certification",
    where: "Persevere",
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
    name: "Node.js",
    value: 85,
  },
  {
    name: "MongoDB",
    value: 95,
  },
  {
    name: "Redux Toolkit",
    value: 90,
  },
];

const strengths = [
  {
    title: "Style & UI/UX Design",
    description:
      "Proficient in creating responsive, professional interfaces using Tailwind CSS with systematic design patterns including consistent spacing, color schemes, and component layouts that maintain visual hierarchy across different screen sizes. Demonstrated expertise in building intuitive user experiences through strategic use of alternating backgrounds, proper typography scaling, and accessible design elements that guide users naturally through complex data presentations.",
  },
  {
    title: "Authentication & Authorization Management",
    description:
      "Experienced in implementing secure authentication and authorization mechanisms using industry-standard protocols and libraries. Proficient in managing user sessions, roles, and permissions to protect sensitive data and ensure a seamless user experience. Demonstrated ability to create comprehensive authentication flows including login/logout functionality, token validation, and secure route protection with proper error handling and loading states",
  },
  {
    title: "Database Management",
    description:
      "Experienced in designing MongoDB database solutions using Mongoose ODM for schema validation and structured data modeling across multiple collections for web applications. Proficient in implementing full CRUD operations through RESTful API endpoints with proper error handling and data validation for secure database interactions. Demonstrated ability to structure modular database architecture with organized models and controllers, ensuring scalable and maintainable applications with secure authentication and environment-based configuration.",
  },
];

// TODO: turn photos into carousel. make card container larger to fit more content
const projects = [
  {
    images: [
      capstoneAbout,
      capstoneDashboard,
      capstoneIngredients,
      capstoneMenu,
      capstoneMessages,
    ],
    title: "Pizza Ordering System",
    description:
      "Full-stack pizza ordering app with admin management system built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit"],
    link: "https://github.com/summer-marie/capstone-pizza", // Link to GitHub repo
  },

  {
    images: [
      intervalScreenOne,
      intervalTimerScreen,
      intervalSetBreak,
    ],
    title: "Intervals Timer (Workout)",
    description: "A workout intervals timer built with React and Tailwind CSS. Fixes the problem of having to look at watch while you workout.",
    technologies: ["React", "Tailwind CSS", "Mobile Compatible"],
    link: "https://github.com/summer-marie/intervals-timer",
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
