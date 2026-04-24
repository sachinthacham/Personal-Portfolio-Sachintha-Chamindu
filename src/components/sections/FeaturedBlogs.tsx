"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/cards/BlogCard";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { featuredBlogs } from "@/data/blogs";

export function FeaturedBlogs() {
  return (
    <section id="blogs" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45" />
            <span className="section-eyebrow">Latest Writing</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45" />
          </div>
          <h2 className="section-title mb-5">
            Thoughts & insights
          </h2>
          <p className="section-lead">
            I write about software architecture, engineering best practices, and the lessons I&apos;ve
            learned building real-world systems at scale.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/blogs">
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
