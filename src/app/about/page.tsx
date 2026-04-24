import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutPageContent } from "@/components/sections/AboutPageContent";

export const metadata: Metadata = {
  title: "About — Sachintha Chamindu",
  description:
    "Learn about Sachintha Chamindu's professional experience, education, and certifications.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
