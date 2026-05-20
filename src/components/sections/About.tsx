"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/45" />
            <span className="section-eyebrow">About Me</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/45" />
          </div>

          {/* Heading */}
          <h2 className="section-title mb-6 max-w-[20ch] mx-auto sm:max-w-none">
            Crafting software that{" "}
            <span className="gradient-text">matters</span>
          </h2>

          {/* Bio */}
          <div className="section-lead mb-12 space-y-4 text-left sm:text-center">
  <p>
    I&apos;m a full-stack engineer with 3 years of experience building
    modern web applications and scalable backend systems. My work focuses
    on clean architecture, distributed systems, and creating reliable
    software that delivers real value.
  </p>

  <p>
    Currently, I&apos;m an undergraduate at the{" "}
    <span className="text-foreground font-semibold">
      University of Moratuwa
    </span>
    , where I continue to deepen my knowledge in software engineering
    while actively building real-world projects. I care deeply about
    clean code, great developer experience, and shipping products that
    actually make an impact.
  </p>
</div>
        </AnimatedSection>

        {/* Stats + CV download */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-3 gap-6 pb-12 mb-12 border-b border-border/50">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {label}
                </div>
              </div>
            ))}

            <AnimatedSection delay={0.25}>
              <Button asChild className="gap-2">
                <Link href="/about">
                  View Experience & Education
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* CTA */}
      </div>
    </section>
  );
}
