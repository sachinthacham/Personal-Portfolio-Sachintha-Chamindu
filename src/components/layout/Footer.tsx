import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

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
  { icon: Mail, href: "mailto:sachinthachamindubal@gmail.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blogs" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Experience & Education", href: "/about" },
      { label: "All Projects", href: "/projects" },
      { label: "All Blog Posts", href: "/blogs" },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="mb-4 flex w-fit items-center gap-2.5 rounded-md">
              <Image
                src="/logo-square.png"
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-lg object-cover ring-1 ring-border"
              />
              <span className="font-heading text-[0.95rem] font-semibold tracking-tight">
                Sachintha<span className="text-primary">Chamindu</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer focused on scalable systems, thoughtful UX,
              and software that holds up in production. Open to meaningful
              opportunities.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>© {currentYear} Sachintha Chamindu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
