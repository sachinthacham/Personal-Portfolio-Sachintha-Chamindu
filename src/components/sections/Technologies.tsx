"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies, techCategories, techIcons } from "@/data/technologies";

// Group skills by category, preserving the order defined in the data file
const groups = techCategories
  .filter((category) => category !== "All")
  .map((category) => ({
    category,
    items: technologies.filter((t) => t.category === category),
  }))
  .filter((group) => group.items.length > 0);

// Logos that need adjusting to stay visible on the dark theme
const darkIconClass: Record<string, string> = {
  nextjs: "dark:invert",
  aws: "dark:invert",
  mysql: "dark:brightness-[2.2]",
  aspnet: "dark:brightness-[1.8]",
};

export function Technologies() {
  return (
    <section id="technologies" className="section border-y border-border bg-surface">
      <div className="container-page">
        <AnimatedSection className="mb-12">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Technologies I work with"
            lead="A curated set of tools and technologies I use to build scalable, robust, and maintainable software."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            {groups.map(({ category, items }) => (
              <div
                key={category}
                className="grid gap-4 px-5 py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:px-6"
              >
                <h3 className="text-sm font-semibold text-foreground">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <li
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-primary/35"
                    >
                      {/* Remote CDN icons (tiny SVGs) — plain <img> avoids image-optimizer config */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={techIcons[tech.icon] ?? ""}
                        alt=""
                        aria-hidden="true"
                        width={18}
                        height={18}
                        loading="lazy"
                        className={`size-4.5 object-contain ${darkIconClass[tech.icon] ?? ""}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
