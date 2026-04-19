"use client";

import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

const projectColors: Record<string, string> = {
  "SaaS": "from-violet-500/20 via-primary/10 to-cyan-500/20",
  "E-Commerce": "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  "DevOps": "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  "Productivity": "from-pink-500/20 via-rose-500/10 to-red-500/20",
  "ML/AI": "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
  "Web3": "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const gradient = projectColors[project.category] || "from-primary/20 via-primary/10 to-primary/5";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
        },
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group overflow-hidden border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
        {/* Image / gradient */}
        <div
          className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm border border-border/50">
              {project.category}
            </Badge>
          </div>

          {/* Year */}
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
              {project.year}
            </Badge>
          </div>

          {/* Decorative elements */}
          <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl font-bold text-white/40">{project.title.charAt(0)}</span>
          </div>
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5 border border-border/40">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="secondary" className="text-xs px-2 py-0.5">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0 gap-2">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5 h-8 text-xs">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-3.5 h-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="sm" className="flex-1 gap-1.5 h-8 text-xs">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="sm" className="gap-1 h-8 text-xs">
            <Link href={`/projects/${project.id}`}>
              Details
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
