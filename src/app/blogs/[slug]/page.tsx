import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.id === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} — Sachintha Chamindu`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.id === slug);
  if (!blog) notFound();

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 2);
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <article className="container-page max-w-3xl py-10 sm:py-14">
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8">
            <Link href="/blogs">
              <ArrowLeft className="size-4" />
              All Articles
            </Link>
          </Button>

          <Badge variant="secondary" className="mb-4">
            {blog.category}
          </Badge>

          {/* Title */}
          <h1 className="font-heading text-3xl font-bold tracking-[-0.015em] text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {blog.readTime}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Cover */}
          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              preload
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Excerpt as lead */}
          <p className="mt-10 mb-10 text-xl font-medium leading-relaxed text-foreground/80">
            {blog.excerpt}
          </p>

          {/* Article body placeholder */}
          <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-muted-foreground">
            <p>
              This is a sample article demonstrating the blog post layout. In a real implementation,
              you would integrate a CMS (like Contentlayer, Sanity, or MDX) to render the full article content here.
            </p>
            <h2 className="mt-12 mb-4 text-2xl font-semibold text-foreground">Introduction</h2>
            <p>
              Software engineering is constantly evolving. The tools, patterns, and paradigms we rely on
              today may look completely different in a few years. Yet some fundamentals remain constant:
              clean architecture, thoughtful API design, and a relentless focus on the developer and user experience.
            </p>
            <h2 className="mt-12 mb-4 text-2xl font-semibold text-foreground">Core Concepts</h2>
            <p>
              When approaching this topic, it&apos;s essential to understand the underlying principles
              before diving into implementation details. The goal is always to write code that is not just
              functional, but maintainable, testable, and understandable to the next developer who reads it.
            </p>
            <h2 className="mt-12 mb-4 text-2xl font-semibold text-foreground">Practical Application</h2>
            <p>
              Theory is valuable, but real mastery comes from applying these concepts in production
              environments with real constraints — deadlines, team dynamics, legacy code, and the
              ever-changing demands of users and stakeholders.
            </p>
            <h2 className="mt-12 mb-4 text-2xl font-semibold text-foreground">Conclusion</h2>
            <p>
              Whether you&apos;re building your first feature or redesigning a critical system, the
              principles discussed here will help you make better decisions and ship higher-quality software.
            </p>
          </div>

          {/* Author card */}
          <div className="mt-14 flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">AM</span>
            </div>
            <div>
              <div className="mb-1 font-semibold text-foreground">Sachintha Chamindu</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior Software Engineer with 4+ years of experience building scalable web applications
                and distributed systems. Writing about software architecture, engineering practices, and
                everything I learn along the way.
              </p>
              <div className="flex gap-2 mt-3">
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.linkedin.com/in/sachinthacham/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blogs/${related.id}`}
                    className="group block rounded-xl border border-border bg-card p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift"
                  >
                    <Badge variant="secondary" className="text-xs mb-3">
                      {related.category}
                    </Badge>
                    <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {related.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{related.excerpt}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span>{related.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
