"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { faqItems, FAQ_CATEGORIES } from "@/data/faq";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactFAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$10k - $25k",
    message: "",
  });

  const filteredFaqs =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* ── Page Header ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <AnimatedSection>
          <Badge className="mb-4">Get In Touch & FAQ</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Let&apos;s build something <span className="text-primary">extraordinary</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Have a project in mind or questions about our process? We&apos;re here to help guide your digital journey.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Contact Section (Form + Info + Static Map) ────────── */}
      <section id="contact-form" className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Static Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatedSection direction="left">
              <h2 className="font-display text-2xl font-bold text-on-surface mb-4">
                Contact Information
              </h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Reach out directly via email or phone, or fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="flex flex-col gap-4">
                <Card hover={false} className="p-4 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-[var(--radius-md)] text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email Us</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-medium text-on-surface hover:text-primary transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </Card>

                <Card hover={false} className="p-4 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-[var(--radius-md)] text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Call Us</h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-medium text-on-surface hover:text-primary transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </Card>

                <Card hover={false} className="p-4 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-[var(--radius-md)] text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Visit Our Studio</h3>
                    <p className="text-sm font-medium text-on-surface">
                      {CONTACT_INFO.address.street}, {CONTACT_INFO.address.suite}
                      <br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Static Map Graphic Card */}
              <div className="mt-6 rounded-[var(--radius-lg)] border border-outline-variant/30 overflow-hidden relative group bg-surface-variant/40">
                <div className="h-56 w-full relative flex items-center justify-center bg-gradient-to-br from-surface-variant via-surface-container to-surface">
                  {/* Decorative Map Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(var(--outline-color) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  
                  {/* Map Pin Visual Marker */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="px-3 py-1.5 bg-primary text-on-primary text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>FORGE STUDIO HQ</span>
                    </div>
                    <div className="w-3 h-3 bg-primary rotate-45 -mt-2 shadow-md" />
                  </div>

                  {/* Static Map Label overlay */}
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-[var(--radius-sm)] border border-outline-variant/30 text-xs font-medium text-on-surface">
                    New York, NY • Manhattan HQ
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <Card hover={false} className="p-8 sm:p-10 border-outline-variant/30">
                <h2 className="font-display text-2xl font-bold text-on-surface mb-2">
                  Send Us a Message
                </h2>
                <p className="text-on-surface-variant text-sm mb-8">
                  Fill out the details below and we will get back to you within 24 business hours.
                </p>

                {formSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface mb-2">Message Sent!</h3>
                    <p className="text-on-surface-variant text-sm max-w-md mb-6">
                      Thank you for reaching out. We&apos;ve received your inquiry and our team will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/40 rounded-[var(--radius-md)] text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/40 rounded-[var(--radius-md)] text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                          Interested Service
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/40 rounded-[var(--radius-md)] text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile Applications">Mobile Applications</option>
                          <option value="Brand Identity">Brand Identity</option>
                          <option value="UI/UX Redesign">UI/UX Redesign</option>
                          <option value="Digital Strategy">Digital Strategy</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/40 rounded-[var(--radius-md)] text-sm text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                          <option value="Under $10k">Under $10k</option>
                          <option value="$10k - $25k">$10k - $25k</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-on-surface uppercase tracking-wider">
                        Project Overview *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your goals, timelines, and key requirements..."
                        className="w-full px-4 py-3 bg-surface-variant/30 border border-outline-variant/40 rounded-[var(--radius-md)] text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="mt-2 w-full sm:w-auto self-start">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ Section (Accordion + Category Filter) ───────── */}
      <section id="faq-section" className="max-w-7xl mx-auto px-6 lg:px-8 border-t border-outline-variant/20 pt-20">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything you need to know"
            highlightWord="know"
            subtitle="Clear answers about our working process, project timelines, and pricing options."
            centered
          />
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 text-xs font-semibold rounded-[var(--radius-full)] transition-colors cursor-pointer ${
                activeCategory === "All"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-variant/40 text-on-surface-variant hover:text-on-surface"
              }`}
            >
              All Questions
            </button>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-[var(--radius-full)] transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-variant/40 text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Accordion Grid */}
        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq) => (
                <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </AnimatedSection>

          {/* Need help footer banner inside FAQ */}
          <AnimatedSection delay={0.3} className="mt-12">
            <Card hover={false} className="p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-variant/30">
              <div className="flex items-center gap-3 text-left">
                <div className="p-3 bg-secondary/10 text-secondary rounded-full">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Have a specific question not listed here?</h4>
                  <p className="text-xs text-on-surface-variant">Our team is available to discuss your unique project scope.</p>
                </div>
              </div>
              <Button href="#contact-form" variant="secondary" size="sm">
                Ask a Question
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
