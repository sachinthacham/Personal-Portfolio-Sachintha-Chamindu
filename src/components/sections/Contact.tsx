"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
} from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@alexmorgan.dev",
    href: "mailto:hello@alexmorgan.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/alexmorgan", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/alexmorgan",
    label: "LinkedIn",
  },
  {
    icon: TwitterXIcon,
    href: "https://twitter.com/alexmorgan",
    label: "Twitter",
  },
];

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
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently open to full-time roles, freelance projects, and
            interesting collaborations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Contact info */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">
                  Connect with me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110 border border-border/50"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection
            direction="right"
            delay={0.1}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                    >
                      <span>⚠</span> {errorMsg}
                    </motion.div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="bg-muted/50 border-border/60 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="bg-muted/50 border-border/60 focus:border-primary"
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
                        className="bg-muted/50 border-border/60 focus:border-primary"
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
                        className="bg-muted/50 border-border/60 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
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
