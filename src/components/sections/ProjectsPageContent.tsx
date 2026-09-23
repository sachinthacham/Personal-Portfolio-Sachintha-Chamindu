"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterPill } from "@/components/ui/FilterPill";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// Featured projects first; otherwise keep the order from the data file
const orderedProjects = [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
];

export function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = orderedProjects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      search === "" ||
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="All Projects"
        lead={<>A complete collection of projects I&apos;ve built</>}
      />

      <section className="py-12 sm:py-16">
        <div className="container-page">
          {/* Filters */}
          <AnimatedSection delay={0.05} className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                aria-label="Search projects"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 rounded-lg bg-card pl-10 text-[0.95rem]"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <FilterPill
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Count */}
          <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
            <span className="font-semibold text-foreground">{projects.length}</span> projects
          </p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${search}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length > 0 ? (
                <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </StaggerContainer>
              ) : (
                <div className="rounded-xl border border-dashed border-border py-20 text-center">
                  <p className="text-muted-foreground">No projects match your search.</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
