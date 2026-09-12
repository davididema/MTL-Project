import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-[var(--letter-spacing-wide)]"
            >
              FORGE STUDIO
            </Link>
            <p className="mt-4 text-sm text-inverse-on-surface/70 leading-[var(--line-height-relaxed)] max-w-xs">
              Engineering Digital Excellence. We build high-performance digital
              products for ambitious brands.
            </p>
            <p className="mt-6 text-xs text-inverse-on-surface/50">
              © {new Date().getFullYear()} Forge Studio. Engineering Digital
              Excellence.
            </p>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[var(--letter-spacing-widest)] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[var(--letter-spacing-widest)] mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
