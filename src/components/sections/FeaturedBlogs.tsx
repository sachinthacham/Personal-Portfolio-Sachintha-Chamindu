"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/cards/BlogCard";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredBlogs } from "@/data/blogs";

export function FeaturedBlogs() {
  return (
    <section id="blogs" className="section">
      <div className="container-page">
        <AnimatedSection className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Latest Writing"
            title="Thoughts & insights"
            lead={
              <>
                I write about software architecture, engineering best practices, and the
                lessons I&apos;ve learned building real-world systems at scale.
              </>
            }
          />
          <Button asChild variant="outline" className="group w-fit shrink-0">
            <Link href="/blogs">
              Read All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
