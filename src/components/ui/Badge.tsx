interface BadgeProps {
  children: string;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-[var(--radius-full)] border border-outline-variant text-on-surface-variant ${className}`}
    >
      {children}
    </span>
  );
}
