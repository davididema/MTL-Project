import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "cta" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

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
  cta: "bg-primary text-on-primary hover:brightness-110 shadow-sm hover:shadow-md",
  outline:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-on-primary",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    withArrow = false,
  } = props;

  const baseClasses = `inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {(withArrow || variant === "cta") && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if ("href" in props && props.href) {
    const linkProps = props as ButtonAsLink;
    if (linkProps.external) {
      return (
        <a
          href={linkProps.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={linkProps.href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  const {
    href: _href,
    external: _ext,
    withArrow: _wa,
    variant: _v,
    size: _s,
    className: _className,
    children: _c,
    ...buttonProps
  } = props as ButtonAsButton & { href?: never; external?: never };

  return (
    <button {...buttonProps} className={baseClasses}>
      {content}
    </button>
  );
}
