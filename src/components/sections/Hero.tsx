"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/sachinthacham", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sachinthacham/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sachinthachamindubal@gmail.com", label: "Email" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
  };
}

export function Hero() {
  return (
    <section className="relative pt-16">
      <div className="container-page">
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          {/* ── Text ─────────────────────────────────────────────── */}
          <div className="max-w-2xl">
            <motion.p
              {...fadeUp(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Software Engineer
            </motion.p>

            <motion.h1
              {...fadeUp(0.06)}
              className="font-heading text-[2.4rem] font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            >
              Turning complex <br className="hidden sm:block" />
              problems into <br className="hidden sm:block" />
              <span className="text-primary">elegant</span> software
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I&apos;m{" "}
              <span className="font-semibold text-foreground">Sachintha Chamindu</span>, a
              Full-Stack Engineer with 3 years of experience building scalable web
              applications, distributed systems, and microservice-based applications,
              passionate about building reliable software and products that create real
              impact.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group">
                <Link href="/#contact">
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.ul {...fadeUp(0.24)} className="mt-10 flex items-center gap-2" aria-label="Social links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-[color,border-color,transform] duration-200 hover:-translate-y-px hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Portrait ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto w-full max-w-[22rem] sm:max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-soft">
              {/* soft accent wash behind the cut-out portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-accent to-transparent"
              />
              <Image
                src="/hero-removebg.png"
                alt="Sachintha Chamindu"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 22rem"
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
