import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
}

/** Intro block used at the top of sub-pages (/projects, /blogs, /about). */
export function PageHeader({
  eyebrow,
  title,
  lead,
  backHref = "/",
  backLabel = "Back to Home",
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border pb-12 pt-10 sm:pb-16 sm:pt-14">
      <div className="container-page">
        <AnimatedSection>
          <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8">
            <Link href={backHref}>
              <ArrowLeft className="size-4" />
              {backLabel}
            </Link>
          </Button>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
          {children && <div className="mt-8">{children}</div>}
        </AnimatedSection>
      </div>
    </section>
  );
}
