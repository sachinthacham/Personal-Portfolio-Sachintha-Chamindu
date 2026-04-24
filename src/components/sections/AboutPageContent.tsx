"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AnimatedSection,
  StaggerContainer,
  staggerChild,
} from "@/components/ui/AnimatedSection";
import { workExperience, education, certificates } from "@/data/experience";
import { Download } from "lucide-react";

type Tab = "experience" | "education" | "certificates";

const tabs: { id: Tab; label: string; icon: typeof Briefcase }[] = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certificates", label: "Certificates", icon: Award },
];

const certCategoryColors: Record<string, string> = {
  Cloud: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  DevOps:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Backend:
    "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  Frontend:
    "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  "AI/ML":
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "Software Engineering":
    "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
  Database:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
};

function WorkExperienceSection() {
  return (
    <div className="space-y-4">
      {workExperience.map((job) => (
        <motion.div
          key={job.id}
          layout
          className="bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-200"
        >
          <div className="w-full p-6 text-left flex items-start gap-4">
            {/* Logo placeholder */}
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-sm font-bold text-primary">
                {job.company.charAt(0)}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-base font-bold">{job.role}</h3>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      job.type === "Full-time"
                        ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                    }`}
                  >
                    {job.type}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {job.company}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {job.startDate} — {job.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="px-6 pb-6 space-y-5">
              <Separator />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {job.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs border border-border/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function EducationSection() {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/30 transition-colors duration-200"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-violet-500/10 border border-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold">
                {edu.degree} in {edu.field}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {edu.institution}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.startDate} — {edu.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                {edu.gpa && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary/5 border-primary/20 text-primary"
                  >
                    GPA: {edu.gpa}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <Separator className="mb-4" />

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {edu.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold mb-3">
              Achievements & Activities
            </h4>
            <ul className="space-y-2">
              {edu.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificatesSection() {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certificates.map((cert) => (
        <motion.div
          key={cert.id}
          variants={staggerChild}
          className="bg-card border border-border/60 rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 hover:-translate-y-1 flex flex-col"
        >
          {/* Certificate preview */}
          <div className="relative mb-4 overflow-hidden rounded-xl border border-border/60 bg-muted/20 aspect-4/3">
            {cert.certificateImage ? (
              <img
                src={cert.certificateImage}
                alt={`${cert.title} certificate`}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/12 to-primary/4">
                <Award className="w-8 h-8 text-primary" />
              </div>
            )}
          </div>

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <Badge
              variant="outline"
              className={`text-xs ${certCategoryColors[cert.category] || "border-border"}`}
            >
              {cert.category}
            </Badge>
          </div>

          <h3 className="text-sm font-bold leading-snug mb-2 flex-1">
            {cert.title}
          </h3>
          <p className="text-xs font-medium text-primary mb-1">{cert.issuer}</p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
            {cert.credentialUrl && cert.showVerifyLink !== false && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Verify
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}

export function AboutPageContent() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="gap-2 mb-8 -ml-2 text-muted-foreground"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/45" />
              <span className="section-eyebrow">My Journey</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-5 leading-[1.08] tracking-tight">
              Experience & <span className="gradient-text">Education</span>
            </h1>
            <p className="section-lead mx-0 text-left mb-8 max-w-2xl">
              My professional journey, academic background, and the
              certifications I&apos;ve earned along the way.
            </p>
            <div className="flex flex-col items-start justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab navigation */}
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="flex gap-1 bg-muted/50 p-1 rounded-xl border border-border/50 w-fit">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === id
                      ? "bg-card text-foreground shadow-sm border border-border/60"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Tab content */}
          <AnimatedSection key={activeTab} direction="up" delay={0}>
            {activeTab === "experience" && <WorkExperienceSection />}
            {activeTab === "education" && <EducationSection />}
            {activeTab === "certificates" && <CertificatesSection />}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
