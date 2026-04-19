import Link from "next/link";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/SocialIcons";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/alexmorgan", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/alexmorgan", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com/alexmorgan", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@alexmorgan.dev", label: "Email" },
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
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-base tracking-tight">
                Alex<span className="text-primary">Morgan</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Full-stack software engineer passionate about building scalable, user-focused products
              that make a difference. Open to exciting opportunities.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Alex Morgan. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-primary font-medium">Next.js</span>,{" "}
            <span className="text-primary font-medium">Tailwind CSS</span> &{" "}
            <span className="text-primary font-medium">shadcn/ui</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
