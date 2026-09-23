"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { AnimatedSection, StaggerContainer } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section border-y border-border bg-surface">
      <div className="container-page">
        <AnimatedSection className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects I'm proud of"
            lead="A selection of projects focused on scalable web applications, microservices, and modern developer tools."
          />
          <Button asChild variant="outline" className="group w-fit shrink-0">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
