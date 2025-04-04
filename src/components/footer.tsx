"use client"

import Link from "next/link"
import { ArrowUp, Frame, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Frame className="h-8 w-8 mr-2 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Obikoru Daniel
            </span>
          </div>

          <div className="flex items-center gap-6">
         
  <Link
    href="https://github.com/eobikoru"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    <Github className="h-5 w-5" />
    <span className="sr-only">GitHub</span>
  </Link>
  <Link
    href="https://x.com/EDaniel82349642"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    <Twitter className="h-5 w-5" />
    <span className="sr-only">Twitter</span>
  </Link>
  <Link
    href="https://www.linkedin.com/in/emeka-obikoru-4551a1217/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    <Linkedin className="h-5 w-5" />
    <span className="sr-only">LinkedIn</span>
  </Link>

          </div>
        </div>

        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-muted-foreground">
            © {new Date().getFullYear()}   Obikoru Daniel. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              {/* Privacy Policy */}
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              {/* Terms of Service */}
            </Link>
          </div>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full border-border hover:bg-secondary/20"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

