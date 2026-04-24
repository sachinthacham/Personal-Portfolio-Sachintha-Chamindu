import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

  const categoryColors: Record<string, string> = {
    Backend: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
    Frontend: "from-pink-500/20 via-rose-400/10 to-orange-500/20",
    DevOps: "from-orange-500/20 via-amber-400/10 to-yellow-500/20",
    "System Design": "from-emerald-500/20 via-teal-400/10 to-green-500/20",
    "AI/ML": "from-violet-500/20 via-purple-400/10 to-indigo-500/20",
  };

  const gradient = categoryColors[blog.category] || "from-primary/20 via-primary/10 to-primary/5";

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero banner */}
        <div className={`h-64 sm:h-80 bg-gradient-to-br ${gradient} relative`}>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Badge variant="secondary" className="mb-4 bg-background/80 backdrop-blur-sm border border-border/50">
              {blog.category}
            </Badge>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button asChild variant="ghost" size="sm" className="gap-2 mb-8 -ml-2 text-muted-foreground">
            <Link href="/blogs">
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
          </Button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs border border-border/40">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* Excerpt as lead */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
            {blog.excerpt}
          </p>

          {/* Article body placeholder */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This is a sample article demonstrating the blog post layout. In a real implementation,
              you would integrate a CMS (like Contentlayer, Sanity, or MDX) to render the full article content here.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Introduction</h2>
            <p>
              Software engineering is constantly evolving. The tools, patterns, and paradigms we rely on
              today may look completely different in a few years. Yet some fundamentals remain constant:
              clean architecture, thoughtful API design, and a relentless focus on the developer and user experience.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Core Concepts</h2>
            <p>
              When approaching this topic, it&apos;s essential to understand the underlying principles
              before diving into implementation details. The goal is always to write code that is not just
              functional, but maintainable, testable, and understandable to the next developer who reads it.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Application</h2>
            <p>
              Theory is valuable, but real mastery comes from applying these concepts in production
              environments with real constraints — deadlines, team dynamics, legacy code, and the
              ever-changing demands of users and stakeholders.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
            <p>
              Whether you&apos;re building your first feature or redesigning a critical system, the
              principles discussed here will help you make better decisions and ship higher-quality software.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Author card */}
          <div className="bg-muted/30 border border-border/60 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center flex-shrink-0">
              <span className="text-lg font-bold text-white">AM</span>
            </div>
            <div>
              <div className="font-bold mb-1">Sachintha Chamindu</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior Software Engineer with 4+ years of experience building scalable web applications
                and distributed systems. Writing about software architecture, engineering practices, and
                everything I learn along the way.
              </p>
              <div className="flex gap-2 mt-3">
                <Button asChild variant="outline" size="sm" className="h-8 text-xs gap-1.5">
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
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blogs/${related.id}`}
                    className="group block bg-card border border-border/60 rounded-xl p-5 hover:border-primary/40 transition-all duration-200 hover:-translate-y-1"
                  >
                    <Badge variant="secondary" className="text-xs mb-3">
                      {related.category}
                    </Badge>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-2">
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
