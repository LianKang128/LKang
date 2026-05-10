export const personal = {
  name: "Ahmad Rizal",
  role: "Full Stack Developer",
  tagline: "I craft high-performance web apps with clean architecture and obsessive attention to detail. From API to pixel.",
  location: "Kuala Lumpur, Malaysia",
  available: true,
  email: "ahmad@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const stats = [
  { value: "5+", label: "Years exp" },
  { value: "32+", label: "Projects shipped" },
  { value: "12k", label: "GitHub stars" },
  { value: "99%", label: "Client rating" },
];

export const techStack = [
  "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS",
];

export const skills = {
  Frontend: [
    { name: "Next.js / React", pct: 95 },
    { name: "TypeScript", pct: 90 },
    { name: "Tailwind CSS", pct: 92 },
    { name: "Animation / Motion", pct: 80 },
    { name: "Testing (Vitest)", pct: 75 },
  ],
  Backend: [
    { name: "Node.js / Express", pct: 90 },
    { name: "PostgreSQL", pct: 85 },
    { name: "GraphQL", pct: 78 },
    { name: "Redis", pct: 72 },
    { name: "Prisma / ORM", pct: 82 },
  ],
  DevOps: [
    { name: "Docker / Compose", pct: 80 },
    { name: "AWS (EC2/S3/CF)", pct: 74 },
    { name: "CI/CD (GitHub Actions)", pct: 85 },
    { name: "Vercel / Edge", pct: 90 },
    { name: "Linux / Nginx", pct: 70 },
  ],
};

export type ProjectCategory = "all" | "fullstack" | "frontend" | "api";

export const projects = [
  {
    id: 1,
    name: "DataPulse",
    desc: "Real-time analytics dashboard with live WebSocket feeds and custom charting engine.",
    tags: ["Next.js", "WebSocket", "D3"],
    category: "fullstack" as const,
    stars: 840,
    link: "#",
    icon: "chart",
  },
  {
    id: 2,
    name: "UIKit Pro",
    desc: "Open-source component library. 80+ accessible components, zero dependencies.",
    tags: ["React", "Tailwind", "Storybook"],
    category: "frontend" as const,
    stars: 2100,
    link: "#",
    icon: "palette",
  },
  {
    id: 3,
    name: "FlowAPI",
    desc: "High-throughput REST + GraphQL gateway. 50k req/s on a single node.",
    tags: ["Node.js", "GraphQL", "Redis"],
    category: "api" as const,
    stars: 620,
    link: "#",
    icon: "api",
  },
  {
    id: 4,
    name: "Shopfast",
    desc: "Headless e-commerce platform with Stripe payments and edge-cached storefront.",
    tags: ["Next.js", "Stripe", "Sanity"],
    category: "fullstack" as const,
    stars: 310,
    link: "#",
    icon: "cart",
  },
  {
    id: 5,
    name: "MotionKit",
    desc: "Animation primitives for React. Declarative, composable, 4kb gzipped.",
    tags: ["React", "Framer Motion"],
    category: "frontend" as const,
    stars: 1400,
    link: "#",
    icon: "motion",
  },
  {
    id: 6,
    name: "AuthKit",
    desc: "Drop-in auth service: OAuth2, MFA, JWT rotation, full audit logging.",
    tags: ["Node.js", "OAuth2", "PostgreSQL"],
    category: "api" as const,
    stars: 480,
    link: "#",
    icon: "lock",
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2023 – Present",
    current: true,
    desc: "Leading frontend architecture for a B2B SaaS platform with 200k+ users. Migrated monolith to micro-frontends, cutting build times by 60%.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup XYZ",
    period: "2021 – 2023",
    current: false,
    desc: "Built the core product from zero to Series A. Designed a data pipeline handling 5M events/day with sub-100ms query latency.",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Agency ABC",
    period: "2019 – 2021",
    current: false,
    desc: "Delivered 15+ client projects. Introduced a shared component system that cut delivery time by 30% across all projects.",
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Freelance",
    period: "2018 – 2019",
    current: false,
    desc: "Built landing pages and small web apps for local businesses. Focused on clean semantic HTML, CSS, and vanilla JS.",
  },
];
