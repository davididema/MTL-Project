export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "nexus-capital",
    title: "Nexus Capital Platform",
    category: "Web Design",
    tags: ["FinTech", "Web App"],
    image: "/images/portfolio/project-1.jpg",
  },
  {
    id: "aura-mobile",
    title: "Aura Mobile",
    category: "UX/UI",
    tags: ["E-Commerce"],
    image: "/images/portfolio/project-2.jpg",
  },
  {
    id: "vertex-analytics",
    title: "Vertex Analytics Dashboard",
    category: "Development",
    tags: ["SaaS", "Dashboard"],
    image: "/images/portfolio/project-3.jpg",
  },
  {
    id: "forge-brand",
    title: "Forge Brand System",
    category: "Branding",
    tags: ["Identity", "Guidelines"],
    image: "/images/portfolio/project-4.jpg",
  },
  {
    id: "pulse-app",
    title: "Pulse Health App",
    category: "UX/UI",
    tags: ["Health", "Mobile"],
    image: "/images/portfolio/project-5.jpg",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All Projects",
  "Web Design",
  "Branding",
  "UX/UI",
  "Development",
] as const;
