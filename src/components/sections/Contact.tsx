"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sachinthachamindubal@gmail.com",
    href: "mailto:sachinthachamindubal@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chilaw, Sri Lanka",
    href: null,
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/sachinthacham",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sachinthacham/",
    label: "LinkedIn",
  },
];

const fieldClass =
  "h-11 rounded-lg border-input bg-background px-3.5 text-[0.95rem] focus-visible:border-primary focus-visible:ring-primary/20";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again.",
      );
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: intro + details */}
          <AnimatedSection>
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              lead={
                <>
                  I&apos;m open to full-time roles, freelance projects, and
                  collaborations that value craft, clarity, and long-term impact.
                </>
              }
            />

            <ul className="mt-10 space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="break-all text-[0.95rem] font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[0.95rem] font-semibold text-foreground">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Connect with me
              </h3>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-muted-foreground transition-[color,border-color,transform] duration-200 hover:-translate-y-px hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-accent">
                    <CheckCircle className="size-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Message sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="mb-5 flex items-center gap-2 rounded-lg border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive"
                    >
                      <AlertCircle className="size-4 shrink-0" /> {errorMsg}
                    </motion.div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="silva harry"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className={fieldClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="silva@gmail.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project collaboration, job opportunity..."
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="min-h-36 resize-none rounded-lg border-input bg-background px-3.5 py-3 text-[0.95rem] focus-visible:border-primary focus-visible:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
