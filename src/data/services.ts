export type ServiceIcon = "Code" | "Scissors" | "TrendingUp" | "Layout";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "High-performance, scalable web applications built with modern frameworks. We engineer robust architectures that handle complexity with grace, ensuring blazing fast load times and impeccable security.",
    icon: "Code",
    tags: ["React", "Node.js", "System Architecture"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description:
      "Forging authoritative brand presence. We design meticulous visual systems, logos, and brand guidelines that communicate industrial strength and modern sophistication.",
    icon: "Scissors",
    tags: ["Visual Systems", "Logo Design", "Typography"],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description:
      "Data-driven roadmaps for digital dominance. We analyze market positioning, user behavior, and technical constraints to formulate strategies that deliver measurable ROI and sustained growth.",
    icon: "TrendingUp",
    tags: ["Market Analysis", "Roadmapping", "Growth Ops"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Precision-engineered interfaces that prioritize user workflow. We employ minimalist aesthetics, robust component libraries, and deep user research to create intuitive, frictionless digital experiences.",
    icon: "Layout",
    tags: ["Wireframing", "Prototyping", "Design Systems"],
  },
];
