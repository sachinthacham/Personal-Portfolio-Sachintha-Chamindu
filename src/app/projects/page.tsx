import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Alex Morgan | Software Engineer",
  description: "Browse all of Alex Morgan's projects — from AI platforms to e-commerce and DevOps tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProjectsPageContent />
      </main>
      <Footer />
    </>
  );
}
