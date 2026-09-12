import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-surface-container-low rounded-[var(--radius-xl)] border border-outline-variant/20 p-6 transition-all duration-300 ${
        hover
          ? "hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
