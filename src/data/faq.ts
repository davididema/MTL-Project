export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_CATEGORIES = [
  "Process & Timelines",
  "Pricing & Budgets",
  "Technical Support",
] as const;

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is a typical project timeline?",
    answer:
      "Most projects take between 6 to 12 weeks depending on scope and complexity. We begin with a discovery phase (1–2 weeks), followed by design (2–3 weeks), development (3–5 weeks), and a final QA and launch phase (1–2 weeks). We provide detailed timelines during our initial consultation.",
    category: "Process & Timelines",
  },
  {
    id: "faq-2",
    question: "How do you handle project pricing?",
    answer:
      "We offer project-based pricing tailored to your specific needs. After an initial consultation, we provide a detailed proposal with transparent cost breakdowns. We don't believe in hidden fees — what you see is what you pay. Retainer arrangements are available for ongoing work.",
    category: "Pricing & Budgets",
  },
  {
    id: "faq-3",
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer flexible support packages ranging from basic maintenance to full-service retainers. All projects include a 30-day post-launch support period at no additional cost to address any issues that arise after deployment.",
    category: "Technical Support",
  },
  {
    id: "faq-4",
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, TypeScript, and Node.js for web development. For design, we work with Figma and Adobe Creative Suite. We also have expertise in headless CMS platforms, cloud infrastructure (AWS, Vercel), and performance optimization.",
    category: "Technical Support",
  },
  {
    id: "faq-5",
    question: "What is your design process?",
    answer:
      "Our process follows four phases: Discover (research, strategy, and requirements gathering), Design (wireframes, prototypes, and visual design), Build (development, testing, and iteration), and Launch (deployment, optimization, and handoff). Each phase includes client review points.",
    category: "Process & Timelines",
  },
  {
    id: "faq-6",
    question: "Do you work with startups on limited budgets?",
    answer:
      "Yes, we work with companies at every stage. For startups, we can scope projects in phases to spread costs over time. We also offer MVP-focused engagements that prioritize the features most critical to your launch, with room to scale as your business grows.",
    category: "Pricing & Budgets",
  },
];
