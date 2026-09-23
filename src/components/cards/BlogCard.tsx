"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerChild } from "@/components/ui/AnimatedSection";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export function BlogCard({ blog }: BlogCardProps) {
  const isExternal = Boolean(blog.articleUrl);
  const href = blog.articleUrl ?? `/blogs/${blog.id}`;

  const body = (
    <>
      <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="text-primary">{blog.category}</span>
          <span aria-hidden="true">·</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground line-clamp-2">
          {blog.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {blog.excerpt}
        </p>

        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary">
          {isExternal ? "Read on Medium" : "Read more"}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
        </span>
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift";

  return (
    <motion.article variants={staggerChild} className="h-full">
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
          {body}
        </a>
      ) : (
        <Link href={href} className={cardClass}>
          {body}
        </Link>
      )}
    </motion.article>
  );
}
