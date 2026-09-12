"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, PORTFOLIO_CATEGORIES } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Our Work"
              subtitle="A curated selection of our finest digital engineering and design projects. Filter by category to explore specific disciplines."
            />
          </AnimatedSection>

          {/* Filter Bar */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-3 mt-10">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-[var(--radius-md)] border transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Project Grid ─────────────────────────────────────── */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-surface-container cursor-pointer">
                  {/* Gradient placeholder */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(${135 + i * 30}deg, var(--primary-color) 0%, var(--tertiary-color) 50%, var(--inverse-surface-color) 100%)`,
                      opacity: 0.7 + i * 0.05,
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/60 transition-all duration-300 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-xs font-medium text-inverse-primary mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-bold text-inverse-on-surface">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-on-surface-variant">
              <p className="text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
