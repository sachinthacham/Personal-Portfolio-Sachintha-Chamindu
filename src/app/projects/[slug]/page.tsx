import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sachintha Chamindu`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  const projectColors: Record<string, string> = {
    SaaS: "from-violet-500/20 via-primary/10 to-cyan-500/20",
    "E-Commerce": "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    DevOps: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
    Productivity: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    "ML/AI": "from-purple-500/20 via-violet-500/10 to-indigo-500/20",
    Web3: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    Logistics: "from-orange-500/20 via-amber-500/10 to-sky-500/20",
  };

  const gradient =
    projectColors[project.category] ||
    "from-primary/20 via-primary/10 to-primary/5";

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Banner */}
        <div className={`h-64 sm:h-80 bg-linear-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-linear-to-t from-background/65 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 mb-8 -ml-2 text-muted-foreground"
          >
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>
          </Button>

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {project.year}
                </Badge>
                {project.featured && (
                  <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                    Featured
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {project.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild size="sm" className="gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </p>

          <Separator className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {(
                    project.keyFeatures ?? [
                      "Scalable architecture designed for high-traffic production environments",
                      "Comprehensive test coverage with unit, integration, and e2e tests",
                      "CI/CD pipeline for automated deployments and rollbacks",
                      "Real-time monitoring and alerting with custom dashboards",
                      "Full documentation including API reference and architecture diagrams",
                    ]
                  ).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {project.galleryImages !== undefined && project.showGallery !== false && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Image Gallery</h2>

                  {project.galleryImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.galleryImages.map((imgPath, index) => (
                        <a
                          key={`${imgPath}-${index}`}
                          href={imgPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block overflow-hidden rounded-xl border border-border/60 bg-muted/20"
                        >
                          <img
                            src={imgPath}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-border/70 bg-muted/20 px-4 py-5">
                      <p className="text-sm text-muted-foreground">
                        Add project screenshots by uploading images to{" "}
                        <span className="font-medium text-foreground">/public/projects</span>{" "}
                        and inserting paths in{" "}
                        <span className="font-medium text-foreground">galleryImages</span>{" "}
                        for this project in{" "}
                        <span className="font-medium text-foreground">src/data/projects.ts</span>.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border/60 rounded-xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border/60 rounded-xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs border border-border/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="gap-2 w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="gap-2 w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <Separator className="mb-12" />
              <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/projects/${related.id}`}
                    className="group block bg-card border border-border/60 rounded-xl p-5 hover:border-primary/40 transition-all duration-200 hover:-translate-y-1"
                  >
                    <Badge variant="secondary" className="text-xs mb-3">
                      {related.category}
                    </Badge>
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {related.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
