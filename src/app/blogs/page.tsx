import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogsPageContent } from "@/components/sections/BlogsPageContent";

export const metadata: Metadata = {
  title: "Blog — Sachintha Chamindu",
  description: "Technical articles on software architecture, engineering practices, and lessons from building at scale.",
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <BlogsPageContent />
      </main>
      <Footer />
    </>
  );
}
