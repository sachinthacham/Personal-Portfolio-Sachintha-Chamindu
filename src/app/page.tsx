import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedBlogs } from "@/components/sections/FeaturedBlogs";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <FeaturedBlogs />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
