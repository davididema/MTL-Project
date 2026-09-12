import { Metadata } from "next";
import {
  Compass,
  Shield,
  Minimize2,
  Lightbulb,
  Plus,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a collective of engineers, designers, and strategists building digital products that balance industrial strength with immaculate precision.",
};

const values = [
  {
    icon: Compass,
    title: "Immaculate Precision",
    description:
      'Every pixel, every line of code is meticulously placed. We reject the "good enough" in favor of absolute structural integrity.',
  },
  {
    icon: Shield,
    title: "Industrial Strength",
    description:
      "Scalable, robust, and built to withstand the demands of modern digital ecosystems.",
  },
  {
    icon: Minimize2,
    title: "Minimalist Core",
    description:
      "Stripping away the superfluous to reveal the essential function and beauty of the product.",
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description:
      "Pushing boundaries through thoughtful engineering and avant-garde design solutions that define industry standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-inverse-surface text-inverse-on-surface py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-inverse-primary bg-primary-container/20 rounded-[var(--radius-full)]">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary" />
                The Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)]">
                Forging digital
                <br />
                <span className="text-inverse-primary">excellence.</span>
              </h1>
              <p className="mt-6 text-lg text-inverse-on-surface/70 max-w-lg leading-[var(--line-height-relaxed)]">
                We are a collective of engineers, designers, and strategists. We
                believe in building digital products that balance industrial
                strength with immaculate precision.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="aspect-[4/3] rounded-[var(--radius-2xl)] overflow-hidden bg-gradient-to-br from-primary/30 via-tertiary/20 to-inverse-surface relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--primary-color)_0%,_transparent_60%)] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_var(--tertiary-color)_0%,_transparent_50%)] opacity-15" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Philosophy ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Philosophy"
              subtitle="The core principles that guide our craft."
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] border border-outline-variant/30 mb-5">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-[var(--line-height-relaxed)]">
                    {value.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Blacksmiths (Team) ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                  The Blacksmiths
                </h2>
                <p className="mt-2 text-on-surface-variant">
                  The minds behind the forge.
                </p>
              </div>
              <Button href="#" variant="outline" size="sm">
                Join the Team
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden bg-surface-container mb-4 relative">
                    {member.isOpenPosition ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-container border-2 border-dashed border-outline-variant/30 rounded-[var(--radius-xl)]">
                        <Plus className="w-10 h-10 text-outline-variant" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-tertiary/10 to-surface-container group-hover:from-primary/20 transition-all duration-300" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-on-surface">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[var(--letter-spacing-wider)] mt-1">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
