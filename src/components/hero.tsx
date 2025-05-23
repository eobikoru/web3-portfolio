"use client"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "./typewriter-effect"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse [animation-delay:2s]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border bg-muted/30 text-sm font-medium backdrop-blur-sm animate-fade-in-down">
            Full-Stack Web2 <span className="text-primary">&</span> Web3 Developer · Blockchain Enthusiast
          </div>
        
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block animate-slide-up-fade opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
              Building the{" "}
            </span>
            <span className="inline-block ml-2 md:ml-4 animate-slide-up-fade opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              digital future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            <span className="inline-block animate-slide-up-fade opacity-0 [animation-delay:900ms] [animation-fill-mode:forwards]">
              Crafting exceptional experiences with <span className="text-primary animate-pulse-slow">Next.js</span> and{" "}
              <span className="text-purple-400 animate-pulse-slow [animation-delay:1s]">Solidity</span>
            </span>
          </p>

          <div className="w-full max-w-2xl mx-auto mb-8 p-4 rounded-lg bg-secondary/10 border border-border backdrop-blur-sm animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]">
            <TypewriterEffect />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in opacity-0 [animation-delay:1500ms] [animation-fill-mode:forwards]">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 animate-gradient"
              onClick={() => scrollToSection("projects")}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-background/50 backdrop-blur-sm hover:bg-muted/30"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6 animate-fade-in opacity-0 [animation-delay:1800ms] [animation-fill-mode:forwards]">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
