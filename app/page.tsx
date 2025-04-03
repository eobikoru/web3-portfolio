import { About } from "@/src/components/about";
import { Contact } from "@/src/components/contact";
import { Experience } from "@/src/components/experience";
import { Footer } from "@/src/components/footer";
import { Hero } from "@/src/components/hero";
import { Navbar } from "@/src/components/navbar";
import { Projects } from "@/src/components/projects";
import { Skills } from "@/src/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

