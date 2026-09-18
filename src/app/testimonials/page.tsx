import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Discover how our engineering and design precision has catalyzed growth for industry leaders.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-inverse-surface text-inverse-on-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-inverse-primary bg-primary-container/20 rounded-[var(--radius-full)]">
              <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary" />
              Client Success
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)]">
              Forged in <em className="text-inverse-primary not-italic">Trust.</em>
            </h1>
            <p className="mt-6 text-lg text-inverse-on-surface/70 max-w-lg leading-[var(--line-height-relaxed)]">
              We don&apos;t just build products; we build partnerships. Discover
              how our engineering and design precision has catalyzed growth for
              industry leaders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trusted By ───────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-on-surface-variant mb-8">
              Trusted by Visionary Teams
            </p>
            <div className="flex items-center justify-between gap-8 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-24 h-10 rounded-[var(--radius-md)] bg-surface-container flex items-center justify-center text-xs font-medium text-on-surface-variant/50"
                >
                  Logo {i}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials Bento Grid ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Ready to forge your next project?
            </h2>
            <p className="text-lg text-on-surface-variant max-w-xl mx-auto mb-8">
              Join the ranks of industry leaders who demand digital excellence.
              Let&apos;s discuss how we can engineer success for your brand.
            </p>
              <Button href="/contact" variant="primary" withArrow size="lg">
                Start a Conversation
              </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
