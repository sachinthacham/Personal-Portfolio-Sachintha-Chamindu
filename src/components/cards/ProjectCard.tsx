"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerChild } from "@/components/ui/AnimatedSection";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const detailsHref = `/projects/${project.id}`;

  return (
    <motion.article variants={staggerChild} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift focus-within:border-primary/40">
        {/* Thumbnail — fixed ratio prevents layout shift */}
        <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-left transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          {/* Meta */}
          <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="text-primary">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          {/* Title — the stretched link makes the whole card clickable */}
          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
            <Link
              href={detailsHref}
              className="rounded-sm outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tech stack */}
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <Badge variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              </li>
            ))}
            {project.tags.length > 4 && (
              <li>
                <Badge variant="outline" className="font-normal text-muted-foreground">
                  +{project.tags.length - 4}
                </Badge>
              </li>
            )}
          </ul>

          {/* Links — sit above the stretched link */}
          <div className="relative z-10 mt-auto flex items-center gap-2 pt-5">
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-3.5 w-3.5" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild size="sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
            )}
            <Link
              href={detailsHref}
              tabIndex={-1}
              aria-hidden="true"
              className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Details
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
