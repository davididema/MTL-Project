import { Metadata } from "next";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
            {/* Large Testimonial */}
            <AnimatedSection delay={0}>
              <Card className="h-full flex flex-col bg-surface-container-low">
                <div className="text-4xl font-display text-primary/30 mb-4">
                  &ldquo;&rdquo;
                </div>
                <blockquote className="text-lg md:text-xl font-medium text-on-surface leading-[var(--line-height-relaxed)] flex-1">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {testimonials[0].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      {testimonials[0].author}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[0].role}, {testimonials[0].company}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Medium Testimonial */}
            <AnimatedSection delay={0.1}>
              <Card className="h-full flex flex-col bg-surface-container-low">
                <div className="text-3xl font-display text-primary/30 mb-4">
                  &ldquo;&rdquo;
                </div>
                <blockquote className="text-on-surface leading-[var(--line-height-relaxed)] flex-1">
                  &ldquo;{testimonials[1].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-sm font-bold text-tertiary">
                    {testimonials[1].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      {testimonials[1].author}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[1].role} at {testimonials[1].company}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Stars Testimonial */}
            <AnimatedSection delay={0.2}>
              <Card className="h-full flex flex-col bg-surface-container-low">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <blockquote className="text-on-surface italic leading-[var(--line-height-relaxed)] flex-1">
                  &ldquo;{testimonials[2].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">
                    {testimonials[2].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      {testimonials[2].author}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[2].role}, {testimonials[2].company}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Metrics Testimonial */}
            <AnimatedSection delay={0.3}>
              <Card className="h-full flex flex-col bg-surface-container-low">
                <h3 className="text-lg font-bold text-on-surface mb-3">
                  Metrics that Matter
                </h3>
                <blockquote className="text-sm text-on-surface-variant leading-[var(--line-height-relaxed)] flex-1">
                  &ldquo;{testimonials[3].quote}&rdquo;
                </blockquote>
                <div className="flex gap-8 mt-6 pt-4 border-t border-outline-variant/20">
                  {testimonials[3].metrics?.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-bold text-primary">
                        {m.value}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[var(--letter-spacing-wider)] text-on-surface-variant mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {testimonials[3].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">
                      {testimonials[3].author}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {testimonials[3].role}, {testimonials[3].company}
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
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
            <Button href="/contact" variant="cta" size="lg">
              Start a Conversation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
