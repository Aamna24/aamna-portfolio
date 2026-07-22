// All portfolio content lives here — edit this file to update the site.
// No other file needs to change when you update your info, links, or copy.

export const profile = {
  name: "Aamna Majid",
  role: "Senior Software Engineer",
  tagline: "React · Next.js · TypeScript · React Native",
  location: "Lahore, Pakistan",
  email: "aamna.majid@gmail.com",
  phone: "+92 324 4566316",
  linkedin: "https://linkedin.com/in/aamna-majid",
  // TODO: add your GitHub profile URL here once you have one you want listed
  github: "",
  yearsExperience: 4,
  summary:
    "Senior Software Engineer with 4 years of experience architecting and shipping production web and mobile applications using React, Next.js, React Native, and TypeScript. Track record of measurable impact: cut page load times by 40% through performance optimization, improved development velocity by 60% by building a reusable component library, and increased operational efficiency by 80% through custom internal tooling.",
};

export const stats = [
  { value: 40, suffix: "%", label: "faster page loads", detail: "via code splitting, lazy loading & caching" },
  { value: 60, suffix: "%", label: "faster dev velocity", detail: "from a reusable component library" },
  { value: 80, suffix: "%", label: "more operational efficiency", detail: "via custom internal tooling" },
];

export const skillGroups = [
  {
    category: "languages-frameworks",
    items: ["JavaScript", "TypeScript", "React", "React Native", "Redux", "Next.js"],
  },
  {
    category: "ui-styling",
    items: ["HTML", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "testing",
    items: ["Jest", "Cypress", "Automated Testing"],
  },
  {
    category: "practices",
    items: [
      "Agile Methodologies",
      "Code Review",
      "Cross-Functional Collaboration",
      "Team Building",
      "Strategy & Execution",
      "R&D",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Ilmversity",
    role: "Senior Software Engineer",
    start: "Dec 2023",
    end: "Feb 2026",
    bullets: [
      "Architected a real estate platform in Next.js with server-side rendering, boosting performance and search visibility.",
      "Delivered a fully responsive UI across desktop, tablet, and mobile for a consistent user experience company-wide.",
      "Built and shipped a React Native mobile app with WebView integration, extending the platform to iOS and Android.",
      "Refactored core modules to cut load times and boost performance, driving higher user satisfaction.",
      "Led code reviews across the team, raising code quality and consistency across the codebase.",
    ],
  },
  {
    company: "AiWorks.ai",
    role: "Software Engineer",
    start: "Mar 2023",
    end: "Dec 2023",
    bullets: [
      "Built the React/Next.js front end for an ecommerce platform, delivering a scalable, maintainable UI.",
      "Designed fully responsive layouts, ensuring seamless UX across all devices and screen sizes.",
      "Cut page load times by 40% via code splitting, lazy loading, and caching, boosting UX and SEO rankings.",
      "Integrated APIs and back-end systems cross-functionally, strengthening architecture and accelerating business goals.",
    ],
  },
  {
    company: "Retailo Technologies",
    role: "Software Engineer",
    start: "Oct 2021",
    end: "Jan 2023",
    bullets: [
      "Built an internal tool for uploading customer assignments and batches, lifting operational efficiency by 80%.",
      "Created a reusable component library, cutting development time by 60% across all projects.",
      "Delivered features independently while partnering cross-functionally, consistently hitting project deadlines.",
      "Contributed to the company's core Next.js website alongside primary engineering duties.",
      "Ran automated testing to strengthen reliability, reducing post-launch defects.",
      "Shipped deep linking, dynamic pricing, and zonal mapping features that drove revenue growth.",
    ],
  },
  {
    company: "InvoZone",
    role: "Software Engineer",
    start: "Jun 2021",
    end: "Sep 2021",
    bullets: [
      "Built a game application using Elixir as part of a cross-functional development team.",
      "Wrote automated Jest tests to strengthen code reliability and catch regressions early.",
    ],
  },
  {
    company: "NUI Solutions",
    role: "MERN Stack Developer",
    start: "Jun 2020",
    end: "Jan 2021",
    bullets: [
      "Built a React-based course registration site, developing forms and dynamic multi-step pages.",
      "Developed a will-creation site using React Hook Form to manage complex validation and state.",
    ],
  },
];

export type Project = {
  title: string;
  company: string;
  description: string;
  tech: string[];
  impact: string;
  /** Optional public links when available. */
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Real Estate Platform",
    company: "Ilmversity",
    description:
      "Server-rendered real estate platform built in Next.js — architected for performance and search visibility, with a fully responsive UI across desktop, tablet, and mobile.",
    tech: ["Next.js", "React", "TypeScript", "SSR", "Responsive Design"],
    impact: "Boosted performance & SEO",
  },
  {
    title: "Real Estate Mobile App",
    company: "Ilmversity",
    description:
      "React Native companion app extending the real estate platform to iOS and Android using WebView integration for shared functionality.",
    tech: ["React Native", "WebView", "iOS", "Android"],
    impact: "Extended platform to mobile",
  },
  {
    title: "Ecommerce Storefront",
    company: "AiWorks.ai",
    description:
      "Scalable, maintainable ecommerce front end built with React and Next.js, optimized end-to-end for speed and search performance.",
    tech: ["React", "Next.js", "Code Splitting", "Lazy Loading", "Caching"],
    impact: "40% faster page loads",
  },
  {
    title: "Operations Upload Tool",
    company: "Retailo Technologies",
    description:
      "Internal tool for uploading customer assignments and batches, replacing a manual process and giving operations a self-serve workflow.",
    tech: ["React", "Next.js", "Automated Testing"],
    impact: "80% more efficient ops",
  },
  {
    title: "Shared Component Library",
    company: "Retailo Technologies",
    description:
      "Shared, reusable UI component library adopted across projects — the foundation that let teams ship features faster with a consistent look and feel.",
    tech: ["React", "TypeScript", "Design Systems"],
    impact: "60% faster development",
  },
];

export const education = {
  degree: "Bachelor's in Computer Science",
  school: "COMSATS University",
  date: "Jun 2021",
};

export const certifications = [
  { name: "JavaScript (Basic)", issuer: "HackerRank", date: "Feb 2023" },
  { name: "Programming for Everybody (Get Started with Python)", issuer: "University of Michigan", date: "May 2020" },
  { name: "Python Data Structures", issuer: "University of Michigan", date: "May 2020" },
  { name: "Technical Support Fundamentals", issuer: "Google", date: "Jun 2020" },
];
