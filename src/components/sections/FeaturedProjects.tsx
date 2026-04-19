"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Featured Work
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Projects I&apos;m proud of
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my most impactful work — from AI-powered SaaS platforms to
            distributed systems and developer tools.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
