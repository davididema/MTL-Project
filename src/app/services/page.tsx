import { Metadata } from "next";
import { Code, Scissors, TrendingUp, LayoutDashboard } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { services, type ServiceIcon } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We craft high-performance digital products and robust brand identities. Our approach merges industrial strength engineering with meticulous design precision.",
};

const iconMap: Record<ServiceIcon, React.ComponentType<{ className?: string }>> = {
  Code,
  Scissors,
  TrendingUp,
  Layout: LayoutDashboard,
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Engineering Digital Excellence"
              subtitle="We craft high-performance digital products and robust brand identities. Our approach merges industrial strength engineering with meticulous design precision."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <Card className="h-full flex flex-col">
                    <div className="w-11 h-11 flex items-center justify-center rounded-[var(--radius-md)] border border-outline-variant/30 mb-6">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-[var(--line-height-relaxed)] flex-1">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-outline-variant/20">
                      {service.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-inverse-surface text-inverse-on-surface rounded-[var(--radius-2xl)] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to engineer your next product?
                </h3>
                <p className="mt-2 text-inverse-on-surface/70">
                  Let&apos;s discuss how our precision approach can elevate your
                  digital presence.
                </p>
              </div>
              <Button href="/contact" variant="primary" withArrow size="lg" className="shrink-0">
                Start a Project
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
