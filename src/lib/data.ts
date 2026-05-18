export const personal = {
  name: "Lian Kang",
  role: "Full Stack Developer",
  tagline:
    "I craft high-performance web apps with clean architecture and obsessive attention to detail. From API to pixel.",
  location: "Kuala Lumpur, Malaysia",
  available: true,
  email: "leeliankang1@gmail.com",
  github: "https://github.com/LianKang128",
  linkedin: "https://www.linkedin.com/in/lee-lian-kang-4b45392a0/",
  whatsapp: "https://wa.me/1137004780",
};

type StatTone = "success" | "danger" | "neutral";

type StatColor = {
  card?: string;
  value?: string;
  label?: string;
};

type Stat = {
  value: string;
  label: string;
  tone: StatTone;
  toneStyle: "full" | "value";
  color?: StatColor;
};

export const stats: Stat[] = [
  {
    value: "TRUE",
    label: "Internship completed",
    tone: "success",
    toneStyle: "full",
    color: {},
  },
  {
    value: "2+",
    label: "Years of Coding Experience",
    tone: "neutral",
    toneStyle: "value",
    color: {
      value: "text-sky-300 drop-shadow-[0_0_12px_#7dd3fccc]",
    },
  },
  {
    value: "Computer Science",
    label: "Bachelor Degree",
    tone: "neutral",
    toneStyle: "value",
    color: {
        value: "text-yellow-300 drop-shadow-[0_0_12px_#facc15cc]",
    },
  },
];

export const techStack = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Express",
  "Flask/FastAPI",
  "Tailwind CSS",
  "AWS",
  "CocosCreator",
];

export const skills = {
  Frontend: [
    { name: "Next.js / React", pct: 80 },
    { name: "TypeScript", pct: 70 },
    { name: "Tailwind CSS", pct: 65 },
    { name: "Animation / Motion", pct: 50 },
    { name: "Testing (Vitest)", pct: 75 },
  ],
  Backend: [
    { name: "Node.js / Express", pct: 90 },
    { name: "PostgreSQL", pct: 80 },
    { name: "MongoDB - NoSQL", pct: 70 },
    { name: " REST", pct: 80 },
    { name: "Flask / FastAPI", pct: 60 },
    { name: "WebSocket / Real-time", pct: 85 },
  ],
  Game: [
    { name: "CocosCreator", pct: 80 },
    { name: "Roblox Studio", pct: 85 },
    { name: "Tiled Map Editor", pct: 70 },
    { name: "Luau", pct: 75 },
  ]

};

export const howIWork = [
  { icon: "⚡", label: "Performance-first", sub: "Every ms counts" },
  { icon: "♿", label: "Accessibility", sub: "WCAG 2.1 AA standard" },
  { icon: "🔒", label: "Security", sub: "OWASP top 10 aware" },
  { icon: "🧪", label: "Test coverage", sub: "Unit + E2E always" },
];

export const currentlyLearning = ["Rust", "LLM APIs", "Edge Runtime", "WebGPU"];

export type ProjectCategory = "all" | "fullstack" | "frontend" | "api";

export const projects = [
  {
    id: 1,
    name: "2D Map Random Generation",
    desc: "🎮 Multiplayer Dungeon Crawler A real-time multiplayer dungeon crawler game built with Cocos Creator (TypeScript) and Node.js, featuring procedurally generated dungeons, party system, and WebSocket-based networking. 🌟 Features 🎯 Core Gameplay.",
    tags: ["Cellular Automata", "WebSocket", "Node.js", "Algorithm", "Game Development"],
    category: "fullstack" as const,
    stars: 0,
    link: "https://github.com/LianKang128/2DMapRandomGeneration",
    icon: "chart",
  },
  {
    id: 2,
    name: "Personal Portfolio Website",
    desc: "A fast, minimal personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.",
    tags: ["React", "Tailwind", "Storybook"],
    category: "frontend" as const,
    stars: 0,
    link: "https://github.com/LianKang128/PersonalPorfolio",
    icon: "palette",
  },
];

export const experience = [
  {
    id: 1,
    role: "Game Developer - Intern",
    company: "IXI Creatives Sdn Bhd",
    period: "Dec 2024 - May 2025",
    current: false,
    location: "Kuala Lumpur, Malaysia - Hybrid",
    desc: "Leading frontend architecture for a B2B SaaS platform with 200k+ users. Migrated monolith to micro-frontends, cutting build times by 60%.",
    detail:
      "Owned the frontend platform for a large SaaS product, shaping component architecture, performance budgets, release workflows, and developer experience across multiple teams.",
    skillsUsed: ["Next.js", "React", "TypeScript", "Tailwind", "Testing"],
    learned: ["Micro-frontends", "Design systems", "Frontend performance"],
    highlights: [
      "Reduced build times by 60% through modular architecture.",
      "Improved UI consistency with a reusable component system.",
      "Mentored developers on scalable React patterns.",
    ],
  },
  {
    id: 2,
    role: "Student",
    company: "Asia Pacific University of Technology & Innovation (APU)",
    period: "2023-2026",
    current: false,
    location: "Kuala Lumpur, Malaysia - Onsite",
    desc: "Pursuing a Bachelor's degree in Computer Science with a focus on software development, algorithms, and data structures. Expected graduation in 2025.",
    detail:
      "Currently enrolled in a comprehensive Computer Science program, focusing on software engineering principles, algorithm design, and data structures. Actively participating in coding competitions and collaborative projects.",
    skillsUsed: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    learned: ["Software Engineering", "Problem Solving", "Team Collaboration"],
    highlights: [
      "Maintained a strong academic record with a focus on computer science fundamentals.",
      "Participated in university hackathons and coding challenges.",
      "Collaborated on group projects to develop real-world applications.",
    ],

  }
];
