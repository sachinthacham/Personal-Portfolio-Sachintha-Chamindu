"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// section: null  → home link (no hash)
// section: string → scrollable section id on the home page
// matchPath: highlight this link when the pathname starts with this value (for sub-pages)
const navLinks = [
  { label: "Home",     href: "/",          section: null,       matchPath: null        },
  { label: "About",    href: "/#about",    section: "about",    matchPath: "/about"    },
  { label: "Projects", href: "/#projects", section: "projects", matchPath: "/projects" },
  { label: "Blog",     href: "/#blogs",    section: "blogs",    matchPath: "/blogs"    },
  { label: "Contact",  href: "/#contact",  section: "contact",  matchPath: null        },
];

const SECTION_IDS = ["about", "projects", "blogs", "contact"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // null = top of page (Home active), string = section id currently in view
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  /* ── scroll detection (navbar background) ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section detection via IntersectionObserver ── */
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    // Reset to null (Home) when scrolled near the top
    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // rootMargin: top offset = navbar (64px), bottom = push detection zone upward so
    // a section becomes "active" as soon as its top enters the upper half of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-64px 0px -45% 0px", threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => setMobileOpen(false), [pathname]);

  /* ── determine which link is active ── */
  function isLinkActive(link: (typeof navLinks)[number]) {
    // On sub-pages (/projects/..., /blogs/..., /about/...) match by pathname prefix
    if (pathname !== "/" && link.matchPath) {
      return pathname.startsWith(link.matchPath);
    }
    // On the home page, use the IntersectionObserver result
    if (pathname === "/") {
      if (link.section === null) return activeSection === null; // Home
      return activeSection === link.section;
    }
    return false;
  }

  /* ── nav click: smooth-scroll on home page, navigate+scroll otherwise ── */
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | null,
  ) {
    if (!section) return; // plain "/" link — let Next handle it
    e.preventDefault();
    setMobileOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (pathname === "/") {
      scrollToSection();
    } else {
      router.push("/");
      setTimeout(scrollToSection, 400);
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
            : "bg-hero-bg/0 backdrop-blur-none border-b border-transparent",
        )}
        /* Always sit on top of the hero-bg so no colour flash */
        style={{ backgroundColor: scrolled ? undefined : "var(--hero-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-base font-semibold tracking-tight">
                Sachintha<span className="text-primary">Chamindu</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.section)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative",
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-primary/10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.section)}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                        active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
