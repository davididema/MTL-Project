import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Crosshair,
  Layers,
  Zap,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Forge Studio — Engineering Digital Excellence",
  description:
    "We craft precision-engineered digital experiences for visionary brands. UI/UX Design, Website Development, Branding, and Product Design.",
};

const advantages = [
  {
    icon: Crosshair,
    title: "Engineered Precision",
    description:
      "We build with meticulous attention to detail. Every component is stress-tested to ensure robust performance and pixel-perfect rendering across all environments.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Our digital products are designed to grow with your business. We implement modular systems that adapt seamlessly to increasing demands and new feature requirements.",
  },
  {
    icon: Zap,
    title: "High-Impact Aesthetics",
    description:
      "We blend industrial strength with refined corporate modernism. The result is a striking visual identity that commands authority and builds instant trust with your users.",
  },
];

const featuredProjects = [
  {
    title: "Nexus Capital Platform",
    tags: ["FinTech", "Web App"],
    href: "/portfolio",
  },
  {
    title: "Aura Mobile",
    tags: ["E-Commerce"],
    href: "/portfolio",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative bg-inverse-surface text-inverse-on-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)]">
              Engineering Digital
              <br />
              <span className="text-inverse-primary">Excellence</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-inverse-on-surface/80 max-w-2xl mx-auto leading-[var(--line-height-relaxed)]">
              We craft precision-engineered digital experiences for visionary
              brands. Industrial strength meets refined aesthetics in every
              product we forge.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="cta" size="lg">
                Consultation
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" className="border-inverse-on-surface/30 text-inverse-on-surface hover:bg-inverse-on-surface/10">
                View Portfolio
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Recent Work ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-on-background">
                Recent Work
              </h2>
              <Link
                href="/portfolio"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Explore all projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Large project card */}
            <AnimatedSection className="md:col-span-3" delay={0.1}>
              <Link href={featuredProjects[0].href} className="group block relative aspect-[16/10] rounded-[var(--radius-xl)] overflow-hidden bg-surface-container">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-tertiary/20 to-inverse-surface/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 mb-3">
                    {featuredProjects[0].tags.map((tag) => (
                      <Badge key={tag} className="bg-inverse-surface/80 text-inverse-on-surface border-transparent text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-inverse-on-surface group-hover:text-inverse-primary transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                </div>
              </Link>
            </AnimatedSection>

            {/* Smaller project card */}
            <AnimatedSection className="md:col-span-2" delay={0.2}>
              <Link href={featuredProjects[1].href} className="group block relative aspect-[16/10] md:aspect-auto md:h-full rounded-[var(--radius-xl)] overflow-hidden bg-surface-container">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 via-primary/20 to-inverse-surface/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 mb-3">
                    {featuredProjects[1].tags.map((tag) => (
                      <Badge key={tag} className="bg-inverse-surface/80 text-inverse-on-surface border-transparent text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-inverse-on-surface group-hover:text-inverse-primary transition-colors">
                    {featuredProjects[1].title}
                  </h3>
                </div>
              </Link>
            </AnimatedSection>
          </div>

          <Link
            href="/portfolio"
            className="sm:hidden flex items-center justify-center gap-1 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Explore all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── The Forge Advantage ──────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-primary bg-primary/10 rounded-[var(--radius-full)]">
                The Forge Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface leading-[var(--line-height-tight)]">
                Why Industry Leaders Choose Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <AnimatedSection key={adv.title} delay={i * 0.1}>
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-[var(--radius-md)] bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <adv.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-[var(--line-height-relaxed)]">
                      {adv.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials Preview ──────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-primary mb-2 block">
                  Client Feedback
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-on-background">
                  What Partners Say
                </h2>
              </div>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View all testimonials
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.1}>
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4 text-secondary">
                      {Array.from({ length: t.stars || 5 }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-on-surface text-base leading-[var(--line-height-relaxed)] mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-outline-variant/20 pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{t.author}</p>
                      <p className="text-xs text-on-surface-variant">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-inverse-surface text-inverse-on-surface text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[var(--line-height-tight)] mb-6">
              Ready to <span className="text-inverse-primary">Forge</span> Your Digital Future?
            </h2>
            <p className="text-lg text-inverse-on-surface/80 max-w-xl mx-auto mb-8">
              Let&apos;s collaborate to build products that combine high architectural standards with immaculate visual polish.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
