import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Render the title as the page's h1 (sub-pages) instead of an h2 */
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <Tag
        className={cn(
          "section-title",
          Tag === "h1" && "text-4xl sm:text-5xl",
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className={cn("section-lead", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </div>
  );
}
