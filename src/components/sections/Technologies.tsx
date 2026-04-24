"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  staggerChild,
} from "@/components/ui/AnimatedSection";
import { technologies, techCategories, techIcons } from "@/data/technologies";

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="technologies" className="py-24 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45" />
            <span className="section-eyebrow">Tech Stack</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45" />
          </div>
          <h2 className="section-title mb-5">
            Technologies I work with
          </h2>
          <p className="section-lead">
            A curated set of tools and technologies I use to build scalable,
            robust, and maintainable software.
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection
          delay={0.1}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {techCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer
              staggerDelay={0.04}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {filtered.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={staggerChild}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 cursor-default"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <>
                      <img
                        src={techIcons[tech.icon] ?? ""}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = "none";
                          const fallback = img.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      {/* Shown only if icon URL fails to load */}
                      <div
                        style={{ display: "none" }}
                        className="w-8 h-8 rounded-lg bg-primary/10 items-center justify-center"
                      >
                        <span className="text-xs font-bold text-primary">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                    </>
                  </div>

                  {/* Name */}
                  <span className="text-xs font-medium text-center leading-tight group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
      </div>
    </section>
  );
}
