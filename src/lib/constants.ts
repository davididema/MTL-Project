export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact & FAQ", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Twitter", href: "https://twitter.com", external: true },
] as const;

export const CONTACT_INFO = {
  email: "hello@forgestudio.com",
  phone: "+1 (555) 019-2837",
  address: {
    street: "100 Innovation Drive",
    suite: "Suite 400",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
} as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Careers", href: "#" },
] as const;
