import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Sachintha Chamindu",
  description: "Browse all of Sachintha Chamindu's projects — from AI platforms to e-commerce and DevOps tools.",
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
