"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterPill } from "@/components/ui/FilterPill";
import { BlogCard } from "@/components/cards/BlogCard";
import { blogs } from "@/data/blogs";

const categoryCounts = blogs.reduce<Record<string, number>>((acc, blog) => {
  acc[blog.category] = (acc[blog.category] ?? 0) + 1;
  return acc;
}, {});

const categories = [
  "All",
  ...Object.keys(categoryCounts).filter((category) => categoryCounts[category] > 0),
];

export function BlogsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      search === "" ||
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="All Blog Posts"
        lead={
          <>
            Deep dives into software architecture, engineering best practices, and the lessons
            I&apos;ve learned building products at scale.
          </>
        }
      />

      <section className="py-12 sm:py-16">
        <div className="container-page">
          {/* Filters */}
          <AnimatedSection delay={0.05} className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                aria-label="Search articles"
                placeholder="Search articles..."
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
            <span className="font-semibold text-foreground">{blogs.length}</span> articles
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
                  {filtered.map((blog, i) => (
                    <BlogCard key={blog.id} blog={blog} index={i} />
                  ))}
                </StaggerContainer>
              ) : (
                <div className="rounded-xl border border-dashed border-border py-20 text-center">
                  <p className="text-muted-foreground">No articles match your search.</p>
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
