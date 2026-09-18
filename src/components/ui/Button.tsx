import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | {
        href: string;
        external?: boolean;
      }
    | Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
  );

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:brightness-110 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-on-surface border border-outline-variant hover:bg-surface-variant",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-on-primary",
};

const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2`;

export default function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps &
  // Guard against accidentally passing link-only props to a button
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkRest } = props as {
      href: string;
      external?: boolean;
      target?: string;
      rel?: string;
    };
    const rel = external ? "noopener noreferrer" : linkRest.rel;
    return external ? (
      <a href={href} target="_blank" rel={rel} className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
