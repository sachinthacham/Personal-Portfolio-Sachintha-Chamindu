"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  ExternalLink,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  staggerChild,
} from "@/components/ui/AnimatedSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { workExperience, education, certificates } from "@/data/experience";
import { cn } from "@/lib/utils";

type Tab = "experience" | "education" | "certificates";

const tabs: { id: Tab; label: string; icon: typeof Briefcase }[] = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certificates", label: "Certificates", icon: Award },
];

function formatRange(start: string, end: string) {
  if (!start && !end) return null;
  if (!start) return end;
  if (!end) return start;
  return `${start} — ${end}`;
}

/* ── Timeline primitives ───────────────────────────────────────── */

function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative space-y-6">{children}</ol>;
}

function TimelineItem({
  date,
  icon: Icon,
  children,
}: {
  date: string | null;
  icon: typeof Briefcase;
  children: ReactNode;
}) {
  return (
    <li className="group grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
      {/* Date column (aligned on desktop, inline on mobile) */}
      <div className="pl-8 pt-1 text-sm font-medium text-muted-foreground sm:pl-0 sm:text-right">
        {date}
      </div>

      <div className="relative pl-8">
        {/* rail + marker */}
        <span aria-hidden="true" className="absolute -bottom-6 left-[0.6875rem] top-0 w-px bg-border group-last:bottom-0" />
        <span
          aria-hidden="true"
          className="absolute left-0 top-0.5 flex size-6 items-center justify-center rounded-full border border-border bg-card text-primary"
        >
          <Icon className="size-3.5" />
        </span>
        <div className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">{children}</div>
      </div>
    </li>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Tabs content ──────────────────────────────────────────────── */

function WorkExperienceSection() {
  return (
    <Timeline>
      {workExperience.map((job) => (
        <TimelineItem key={job.id} icon={Briefcase} date={formatRange(job.startDate, job.endDate)}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{job.company}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {job.location}
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit">
              {job.type}
            </Badge>
          </div>

          <p className="prose-measure mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            {job.description}
          </p>

          <div className="mt-5">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Key Achievements</h4>
            <BulletList items={job.achievements} />
          </div>

          <div className="mt-5">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {job.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function EducationSection() {
  return (
    <Timeline>
      {education.map((edu) => (
        <TimelineItem key={edu.id} icon={GraduationCap} date={formatRange(edu.startDate, edu.endDate)}>
          <h3 className="text-lg font-semibold text-foreground">
            {edu.degree} in {edu.field}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{edu.institution}</span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" />
              {edu.location}
            </span>
            {edu.gpa && (
              <Badge variant="secondary" className="border-primary/20 bg-accent text-accent-foreground">
                GPA: {edu.gpa}
              </Badge>
            )}
          </div>

          <p className="prose-measure mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            {edu.description}
          </p>

          <div className="mt-5">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Achievements & Activities</h4>
            <BulletList items={edu.achievements} />
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function CertificatesSection() {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={staggerChild}
          className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          {/* Certificate preview */}
          <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-lg border border-border bg-background">
            {cert.certificateImage ? (
              <Image
                src={cert.certificateImage}
                alt={`${cert.title} certificate`}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-2"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-accent">
                <Award className="size-8 text-primary" />
              </div>
            )}
          </div>

          <div className="mb-2">
            <Badge variant="secondary" className="font-normal">
              {cert.category}
            </Badge>
          </div>

          <h3 className="flex-1 text-[0.95rem] font-semibold leading-snug text-foreground">
            {cert.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

          {cert.credentialUrl && cert.showVerifyLink !== false && (
            <div className="mt-4 border-t border-border pt-3">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Verify
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          )}
        </motion.div>
      ))}
    </StaggerContainer>
  );
}

export function AboutPageContent() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <>
      <PageHeader
        eyebrow="My Journey"
        title="Experience & Education"
        lead={
          <>
            My professional journey, academic background, and the certifications I&apos;ve
            earned along the way.
          </>
        }
      >
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="size-4" />
            Download CV
          </a>
        </Button>
      </PageHeader>

      <section className="py-12 sm:py-16">
        <div className="container-page">
          {/* Tab navigation */}
          <AnimatedSection delay={0.05} className="mb-10">
            <div
              role="tablist"
              aria-label="Background"
              className="grid w-full grid-cols-3 gap-1 rounded-xl border border-border bg-muted p-1 sm:flex sm:w-fit"
            >
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={activeTab === id}
                  aria-controls={`panel-${id}`}
                  onClick={() => setActiveTab(id)}
                  className={cn(
                    "flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-200 sm:px-5",
                    activeTab === id
                      ? "bg-card text-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="hidden size-4 sm:block" />
                  {label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Tab content */}
          <AnimatedSection key={activeTab} direction="up" delay={0}>
            <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
              {activeTab === "experience" && <WorkExperienceSection />}
              {activeTab === "education" && <EducationSection />}
              {activeTab === "certificates" && <CertificatesSection />}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
