"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-[var(--letter-spacing-wide)] text-on-surface"
        >
          FORGE STUDIO
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button href="/contact" size="sm" className="hidden md:inline-flex">
            Contact
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface border-b border-outline-variant/20"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-[var(--radius-md)] text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button
                  href="/contact"
                  size="sm"
                  className="w-full"
                >
                  Contact
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
