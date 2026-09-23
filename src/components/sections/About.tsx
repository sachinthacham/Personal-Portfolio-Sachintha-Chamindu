"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
];

export function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AnimatedSection>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Crafting software that <span className="text-primary">matters</span>
                </>
              }
            />
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="prose-measure space-y-5 text-base leading-[1.75] text-muted-foreground sm:text-[1.0625rem]">
              <p>
                I&apos;m a full-stack engineer with 3 years of experience building
                modern web applications and scalable backend systems. My work focuses
                on clean architecture, distributed systems, and creating reliable
                software that delivers real value.
              </p>

              <p>
                Currently, I&apos;m an undergraduate at the{" "}
                <span className="font-semibold text-foreground">
                  University of Moratuwa
                </span>
                , where I continue to deepen my knowledge in software engineering
                while actively building real-world projects. I care deeply about
                clean code, great developer experience, and shipping products that
                actually make an impact.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-10">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="font-heading text-3xl font-bold tracking-tight text-foreground">
                      {value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              <Button asChild variant="outline" className="group w-fit">
                <Link href="/about">
                  View Experience & Education
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
