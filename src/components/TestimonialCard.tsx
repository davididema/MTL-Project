import Image from "next/image";
import { Star } from "lucide-react";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Testimonial } from "@/data/testimonials";

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function TestimonialCard({
  testimonial,
  delay = 0,
}: {
  testimonial: Testimonial;
  delay?: number;
}) {
  const { quote, author, role, company, variant, avatar } = testimonial;

  const avatarNode = (colored: string, size: string, text: string) =>
    avatar ? (
      <div className={`${size} relative rounded-full overflow-hidden`}>
        <Image
          src={avatar}
          alt={`${author}'s avatar`}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
    ) : (
      <div
        className={`${size} rounded-full ${colored} flex items-center justify-center ${text}`}
      >
        {initials(author)}
      </div>
    );

  const attribution = (
    <div className="flex items-center gap-3 mt-6">
      {variant === "large" &&
        avatarNode("bg-primary/20", "w-12 h-12", "text-sm font-bold text-primary")}
      {variant === "medium" &&
        avatarNode(
          "bg-tertiary/20",
          "w-10 h-10",
          "text-sm font-bold text-tertiary"
        )}
      {variant === "stars" &&
        avatarNode(
          "bg-secondary/20",
          "w-9 h-9",
          "text-xs font-bold text-secondary"
        )}
      {variant === "metrics" &&
        avatarNode(
          "bg-primary/20",
          "w-10 h-10",
          "text-sm font-bold text-primary"
        )}
      <div>
        <p className="text-sm font-semibold text-on-surface">{author}</p>
        <p className="text-xs text-on-surface-variant">
          {variant === "medium"
            ? `${role} at ${company}`
            : `${role}, ${company}`}
        </p>
      </div>
    </div>
  );

  return (
    <AnimatedSection delay={delay}>
      <Card className="h-full flex flex-col bg-surface-container-low">
        {variant === "stars" && (
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-secondary text-secondary"
              />
            ))}
          </div>
        )}
        {variant === "metrics" && (
          <h3 className="text-lg font-bold text-on-surface mb-3">
            Metrics that Matter
          </h3>
        )}

        {variant === "large" && (
          <div className="text-4xl font-display text-primary/30 mb-4">
            &ldquo;&rdquo;
          </div>
        )}
        {variant === "medium" && (
          <div className="text-3xl font-display text-primary/30 mb-4">
            &ldquo;&rdquo;
          </div>
        )}

        <blockquote
          className={
            variant === "large"
              ? "text-lg md:text-xl font-medium text-on-surface leading-[var(--line-height-relaxed)] flex-1"
              : variant === "stars"
                ? "text-on-surface italic leading-[var(--line-height-relaxed)] flex-1"
                : variant === "metrics"
                  ? "text-sm text-on-surface-variant leading-[var(--line-height-relaxed)] flex-1"
                  : "text-on-surface leading-[var(--line-height-relaxed)] flex-1"
          }
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {variant === "metrics" && (
          <div className="flex gap-8 mt-6 pt-4 border-t border-outline-variant/20">
            {testimonial.metrics?.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-primary">{m.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[var(--letter-spacing-wider)] text-on-surface-variant mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {attribution}
      </Card>
    </AnimatedSection>
  );
}