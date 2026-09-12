interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = centered ? "text-center" : "text-left";

  const renderTitle = () => {
    if (!highlightWord) {
      return <>{title}</>;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4">
          {centered && <div className="flex-1" />}
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-[var(--letter-spacing-widest)] uppercase text-primary bg-primary/10 rounded-[var(--radius-full)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
          {centered && <div className="flex-1" />}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] text-on-background">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-on-surface-variant max-w-2xl leading-[var(--line-height-relaxed)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
