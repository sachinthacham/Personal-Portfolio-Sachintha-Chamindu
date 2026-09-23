import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag, ArrowUpRight } from "lucide-react";
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

function SidebarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container-page py-10 sm:py-14">
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8">
            <Link href="/projects">
              <ArrowLeft className="size-4" />
              All Projects
            </Link>
          </Button>

          {/* Header */}
          <header className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
              {project.featured && (
                <Badge className="border-primary/20 bg-accent text-accent-foreground">Featured</Badge>
              )}
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="size-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            )}
          </header>

          {/* Cover */}
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-soft sm:aspect-21/9">
            <Image
              src={project.image}
              alt={project.title}
              fill
              preload
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover object-left"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_18rem] lg:gap-14">
            {/* Main content */}
            <div className="min-w-0 space-y-12">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Overview</h2>
                <p className="prose-measure text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Key Features</h2>
                <ul className="prose-measure space-y-3">
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
                      className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {project.galleryImages !== undefined && project.showGallery !== false && (
                <section>
                  <h2 className="mb-4 text-xl font-semibold text-foreground">Image Gallery</h2>

                  {project.galleryImages.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {project.galleryImages.map((imgPath, index) => (
                        <a
                          key={`${imgPath}-${index}`}
                          href={imgPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block aspect-video overflow-hidden rounded-xl border border-border bg-muted"
                        >
                          <Image
                            src={imgPath}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-5">
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
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <SidebarCard title="Project Info">
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <dt className="text-muted-foreground">Year:</dt>
                    <dd className="font-medium text-foreground">{project.year}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="size-4 text-primary" />
                    <dt className="text-muted-foreground">Category:</dt>
                    <dd className="font-medium text-foreground">{project.category}</dd>
                  </div>
                </dl>
              </SidebarCard>

              <SidebarCard title="Tech Stack">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </SidebarCard>

              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-col gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="size-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild className="w-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </aside>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-20 border-t border-border pt-12">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">Related Projects</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/projects/${related.id}`}
                    className="group block rounded-xl border border-border bg-card p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift"
                  >
                    <p className="mb-2 text-xs font-medium text-primary">{related.category}</p>
                    <h3 className="flex items-start justify-between gap-3 font-semibold text-foreground">
                      {related.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{related.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {related.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
