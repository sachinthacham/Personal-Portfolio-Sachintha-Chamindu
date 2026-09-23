"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  { label: "Tech Stack", href: "/#technologies", section: "technologies", matchPath: null },
  { label: "Contact",  href: "/#contact",  section: "contact",  matchPath: null        },
];

const SECTION_IDS = ["about", "projects", "blogs", "technologies", "contact"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // The menu remembers which path it was opened on, so it closes itself on navigation
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const mobileOpen = menuOpenOn === pathname;
  const setMobileOpen = (open: boolean) => setMenuOpenOn(open ? pathname : null);

  // Section in view on the home page (null = top of page, Home active)
  const [activeSection, setActiveSection] = useState<string | null>(null);

  /* ── scroll detection (navbar background) ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section detection via IntersectionObserver ── */
  useEffect(() => {
    if (pathname !== "/") return;

    // Reset to null (Home) when scrolled near the top
    const onScroll = () => {
      if (window.scrollY < 80) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll); // clear a stale highlight on arrival

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
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

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
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    };

    if (pathname === "/") {
      scrollToSection();
    } else {
      setActiveSection(section);
      router.push("/");
      setTimeout(scrollToSection, 400);
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || mobileOpen
            ? "border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
            : "border-transparent bg-background",
        )}
      >
        <div className="container-page">
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 rounded-md"
              aria-label="Sachintha Chamindu — home"
            >
              <Image
                src="/logo-square.png"
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-lg object-cover ring-1 ring-border transition-transform duration-200 group-hover:-translate-y-px"
              />
              <span className="font-heading text-[0.95rem] font-semibold tracking-tight text-foreground">
                Sachintha<span className="text-primary">Chamindu</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.section)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1">
              <ThemeToggle />

              {/* Mobile toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 shadow-soft backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-3">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.section)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-[0.95rem] font-medium transition-colors duration-200",
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
