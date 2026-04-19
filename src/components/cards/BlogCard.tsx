"use client";

import Link from "next/link";
import { Clock, ArrowUpRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Blog } from "@/data/blogs";

const categoryColors: Record<string, string> = {
  Backend: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
  Frontend: "from-pink-500/20 via-rose-400/10 to-orange-500/20",
  DevOps: "from-orange-500/20 via-amber-400/10 to-yellow-500/20",
  "System Design": "from-emerald-500/20 via-teal-400/10 to-green-500/20",
  "AI/ML": "from-violet-500/20 via-purple-400/10 to-indigo-500/20",
};

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const gradient =
    categoryColors[blog.category] ||
    "from-primary/20 via-primary/10 to-primary/5";

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
      <Link href={`/blogs/${blog.id}`} className="block h-full group">
        <Card className="h-full flex flex-col overflow-hidden border-border/60 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-pointer">
          {/* Banner */}
          <div
            className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-end p-4`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent" />
            <Badge
              variant="secondary"
              className="relative z-10 text-xs bg-background/80 backdrop-blur-sm border border-border/50"
            >
              {blog.category}
            </Badge>
          </div>

          <CardHeader className="pb-2">
            <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {blog.title}
            </h3>
          </CardHeader>

          <CardContent className="flex-1 pb-4">
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
              {blog.excerpt}
            </p>
          </CardContent>

          <CardFooter className="pt-2 flex items-center justify-center">
            <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200">
              Read more
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
