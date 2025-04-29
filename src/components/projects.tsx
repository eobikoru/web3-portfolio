"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium
              ${isVisible ? "animate-fade-in-down opacity-0 [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            My Work
          </div>
          <h2
            className={`text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-gradient
              ${isVisible ? "animate-slide-up-fade opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto
              ${isVisible ? "animate-slide-up-fade opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            A selection of my recent work spanning Web2 and Web3 technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Blinqpay",
              description:
                "A comprehensive payment gateway solution with seamless integration capabilities. Built with Next.js and TypeScript, this platform offers businesses robust payment processing with an intuitive user interface and responsive design.",
              image: "/images/blinqpaycv.png",
              demoUrl: "https://blinqpay.io/",
              repoUrl: "#",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 0,
            },
            {
              title: "Alpha",
              description:
                "Alpha is a Web3-native platform where creators and Key Opinion Leaders (KOLs) monetize their expertise by sharing curated tools and offering time for consultations or mentorship sessions.",
              image: "/images/alp.png",
              demoUrl: "https://alpha-main-self.vercel.app/",
              repoUrl: "#",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "solidity", "wagmi"],
              type: "web3" as const,
              delay: 100,
            },
            {
              title: "Qwid",
              description:
                "A global payment solution platform enabling secure transactions from anywhere in the world. Features a sophisticated dashboard with real-time analytics, multi-currency support, and advanced security protocols to facilitate international payments.",
              image: "/images/qwidcv.png",
              demoUrl: "https://www.qwid.io/",
              repoUrl: "#",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 200,
            },
            {
              title: "E-commerce with Stripe",
              description:
                "A full-featured e-commerce application with Stripe payment integration. This Next.js application includes product listings, shopping cart functionality, secure checkout process, and order management with real-time payment processing.",
              image: "/images/stripe.jpg",
              demoUrl: "https://sanity-ecommerce-stripe-bmap.vercel.app/",
              repoUrl: "https://github.com/eobikoru/Sanity-ecommerce-stripe",
              tags: ["Next.js", "Stripe", "TypeScript"],
              type: "web2" as const,
              delay: 300,
            },
            {
              title: "Preggify",
              description:
                "An innovative platform designed to support career-driven women during pregnancy and childcare. Features personalized resources, community support, and tools to help balance professional growth with motherhood through an accessible and responsive interface.",
              image: "/images/preg.png",
              demoUrl: "https://www.preggify.com/",
              repoUrl: "#",
              tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 400,
            },
            {
              title: "Zuri Health",
              description:
                "A comprehensive healthcare platform connecting patients with medical professionals. Built with Next.js, this application features appointment scheduling, telemedicine consultations, medical records management, and health resource library with a focus on accessibility.",
              image: "/images/zuri.png",
              demoUrl: "https://www.zuri.health/",
              repoUrl: "#",
              tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 500,
            },
            {
              title: "TinausKings",
              description:
                "A professional service platform offering home improvement, security, and technology solutions. Features service booking, project galleries, customer testimonials, and detailed service descriptions with an emphasis on quality and reliability.",
              image: "/images/tin.png",
              demoUrl: "https://tinauskingz.com/",
              repoUrl: "https://github.com/eobikoru/kingz-tin",
              tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 600,
            },
            {
              title: "Aggregator Dashboard",
              description:
                "A powerful data aggregation dashboard providing centralized insights and analytics. Built with Next.js and MongoDB, this platform features customizable widgets, data visualization tools, real-time updates, and comprehensive reporting capabilities.",
              image: "/images/agg.png",
              demoUrl: "https://auth.blinqpay.io/auth/login",
              repoUrl: "#",
              tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 700,
            },
            {
              title: "Real Estate Platform",
              description:
                "A modern real estate application for property listings and management. Features property search with filters, detailed property information, image galleries, agent contacts, and neighborhood insights with an intuitive user interface.",
              image: "/images/retor.jpg",
              demoUrl: "https://realtor-app-pi.vercel.app/",
              repoUrl: "https://github.com/eobikoru/Realtor-app",
              tags: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
              type: "web2" as const,
              delay: 800,
            },
            {
              title: "Blog Web Application",
              description:
                "A feature-rich blogging platform built with React and Sanity CMS. Includes article categorization, commenting system, author profiles, rich text editing, and responsive design for optimal reading experience across all devices.",
              image: "/images/favicon.png",
              demoUrl: "https://shareme-emeka-blog.netlify.app/",
              repoUrl: "https://github.com/eobikoru/blogapp",
              tags: ["React", "Sanity", "CSS", "Redux"],
              type: "web2" as const,
              delay: 900,
            },
          ].map((project, index) => (
            <ProjectCard key={index} {...project} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  repoUrl,
  tags,
  type,
  delay = 0,
  isVisible = false,
}: {
  title: string
  description: string
  image: string
  demoUrl: string
  repoUrl: string
  tags: string[]
  type: "web2" | "web3"
  delay?: number
  isVisible?: boolean
}) {
  const { toast } = useToast()

  const handleRepoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (repoUrl === "#") {
      e.preventDefault()
      toast({
        title: "Private Repository",
        description: "This project's source code is in a private repository.",
        variant: "default",
        duration: 3000,
      })
    }
  }

  return (
    <div
      className={`bg-background rounded-lg overflow-hidden border border-border group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5
        ${isVisible ? `animate-card-pop opacity-0 [animation-delay:${700 + delay}ms] [animation-fill-mode:forwards]` : "opacity-0"}`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 z-20">
          <Badge
            variant={type === "web3" ? "default" : "secondary"}
            className={`${type === "web3" ? "bg-primary hover:bg-primary/90" : ""} animate-badge-pulse`}
          >
            {type === "web3" ? "Web3" : "Web2"}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors group-hover:translate-x-1 transform duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 group-hover:text-foreground/90 transition-colors">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={tag}
              variant="outline"
              className={`text-xs bg-secondary/20 hover:bg-secondary/30 border-border transition-all duration-300 hover:scale-105
                ${isVisible ? `animate-tag-fade opacity-0 [animation-delay:${1000 + delay + index * 100}ms] [animation-fill-mode:forwards]` : "opacity-0"}`}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 border-border hover:bg-secondary/20 transition-transform duration-300 hover:translate-y-[-2px]"
          >
            <Link href={repoUrl} onClick={handleRepoClick}>
              <Github className="mr-2 h-4 w-4 group-hover:animate-spin-slow" />
              Code
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-primary/90 hover:bg-primary transition-transform duration-300 hover:translate-y-[-2px] animate-gradient"
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4 group-hover:animate-bounce-light" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
