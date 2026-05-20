"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/sachinthacham", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sachinthacham/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:sachinthachamindubal@gmail.com", label: "Email" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--hero-bg)" }}
    >
      {/* Subtle radial glow behind image area */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 50%, color-mix(in oklch, var(--color-primary) 12%, transparent), transparent 75%)",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-4rem)]">
          {/* ── Left: text ──────────────────────────────────────── */}
          <div className="flex flex-col justify-center order-2 lg:order-1 py-16 lg:py-0 lg:pr-8 relative z-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-10 bg-linear-to-r from-transparent to-primary/50" />
              <span className="section-eyebrow inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1 font-sans">
                Software Engineer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-semibold leading-[1.06] tracking-tight mb-7"
              style={{ color: "var(--hero-heading)" }}
            >
              Turning <span className="text-primary">complex</span>
              <br />
              problems into
              <br />
              <span className="gradient-text">elegant</span> software
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg leading-relaxed text-pretty mb-10 max-w-md sm:max-w-lg"
              style={{ color: "var(--hero-muted)" }}
            >
              I&apos;m{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--hero-heading)" }}
              >
                Sachintha Chamindu
              </span>
              , a Full-Stack Engineer with 3 years of experience building
scalable web applications, distributed systems, and
microservice-based applications, passionate about building
reliable software and products that create real impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-foreground text-base bg-primary transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-primary/92 shadow-lg shadow-primary/20 ring-1 ring-primary/10"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm border border-border/80 bg-background/40 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/6"
                style={{
                  color: "var(--hero-muted)",
                }}
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                  style={{
                    background: "var(--hero-icon-bg)",
                    border: "1px solid var(--hero-icon-border)",
                    color: "var(--hero-muted)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: blended image ──── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
            style={{ height: "100vh", maxHeight: "100vh" }}
          >
            {/* Image — oversized to fill and overflow the column */}
            <div className="absolute -inset-x-16 inset-y-0">
              <Image
                src="/hero-removebg.png"
                alt="Sachintha Chamindu"
                width={1400}
                height={1400}
                priority
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>

            {/* ── Blend gradients ─────────────────────────────────── */}
            {/* Left — strong: merges with text column */}
            <div
              className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to right, var(--hero-bg) 10%, transparent 100%)",
              }}
            />
            {/* Right edge */}
            <div
              className="absolute inset-y-0 right-0 w-1/5 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to left, var(--hero-bg) 0%, transparent 100%)",
              }}
            />
            {/* Bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to top, var(--hero-bg) 0%, transparent 100%)",
              }}
            />
            {/* Top */}
            <div
              className="absolute inset-x-0 top-0 h-1/4 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to bottom, var(--hero-bg) 0%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid var(--hero-border)" }}
        >
          <div className="w-1 h-2.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
