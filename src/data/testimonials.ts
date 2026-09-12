export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  variant: "large" | "medium" | "stars" | "metrics";
  stars?: number;
  metrics?: { label: string; value: string }[];
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-jenkins",
    quote:
      "Forge Studio completely redefined our digital infrastructure. Their attention to detail isn't just aesthetic; it's deeply engineered. They delivered a platform that scales effortlessly.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Nexus Corp",
    avatar: "/images/testimonials/avatar-1.jpg",
    variant: "large",
  },
  {
    id: "marcus-vance",
    quote:
      "The design system they crafted is bulletproof. It drastically reduced our development time while elevating the entire brand experience.",
    author: "Marcus Vance",
    role: "Design Dir.",
    company: "Altura",
    avatar: "/images/testimonials/avatar-2.jpg",
    variant: "medium",
  },
  {
    id: "elena-rostova",
    quote:
      "Uncompromising quality. Forge doesn't cut corners. They treat your product like it's their own, resulting in an outcome that surpassed all expectations.",
    author: "Elena Rostova",
    role: "Founder",
    company: "FinEdge",
    avatar: "/images/testimonials/avatar-3.jpg",
    variant: "stars",
    stars: 5,
  },
  {
    id: "david-chen",
    quote:
      "Since launching the redesign crafted by Forge Studio, our user retention has increased by 42% and load times have dropped significantly. True digital excellence.",
    author: "David Chen",
    role: "CEO",
    company: "DataFlow",
    avatar: "/images/testimonials/avatar-4.jpg",
    variant: "metrics",
    metrics: [
      { label: "Retention Boost", value: "42%" },
      { label: "Speed Increase", value: "2.5x" },
    ],
  },
];
