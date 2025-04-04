"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
            My Work
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work spanning Web2 and Web3 technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Blinqpay"
            description="A comprehensive payment gateway solution with seamless integration capabilities. Built with Next.js and TypeScript, this platform offers businesses robust payment processing with an intuitive user interface and responsive design."
            image="/images/blinqpaycv.png"
            demoUrl="https://blinqpay.io/"
            repoUrl="#"
            tags={["Next.js", "TypeScript", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="Qwid"
            description="A global payment solution platform enabling secure transactions from anywhere in the world. Features a sophisticated dashboard with real-time analytics, multi-currency support, and advanced security protocols to facilitate international payments."
            image="/images/qwidcv.png"
            demoUrl="https://www.qwid.io/"
            repoUrl="#"
            tags={["Next.js", "TypeScript", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="E-commerce with Stripe"
            description="A full-featured e-commerce application with Stripe payment integration. This Next.js application includes product listings, shopping cart functionality, secure checkout process, and order management with real-time payment processing."
            image="/images/stripe.jpg"
            demoUrl="https://sanity-ecommerce-stripe-bmap.vercel.app/"
            repoUrl="https://github.com/eobikoru/Sanity-ecommerce-stripe"
            tags={["Next.js", "Stripe", "TypeScript"]}
            type="web2"
          />

          <ProjectCard
            title="Preggify"
            description="An innovative platform designed to support career-driven women during pregnancy and childcare. Features personalized resources, community support, and tools to help balance professional growth with motherhood through an accessible and responsive interface."
            image="/images/preg.png"
            demoUrl="https://www.preggify.com/"
            repoUrl="#"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="Zuri Health"
            description="A comprehensive healthcare platform connecting patients with medical professionals. Built with Next.js, this application features appointment scheduling, telemedicine consultations, medical records management, and health resource library with a focus on accessibility."
            image="/images/zuri.png"
            demoUrl="https://www.zuri.health/"
            repoUrl="#"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="TinausKings"
            description="A professional service platform offering home improvement, security, and technology solutions. Features service booking, project galleries, customer testimonials, and detailed service descriptions with an emphasis on quality and reliability."
            image="/images/tin.png"
            demoUrl="https://tinauskingz.com/"
            repoUrl="https://github.com/eobikoru/kingz-tin"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="Aggregator Dashboard"
            description="A powerful data aggregation dashboard providing centralized insights and analytics. Built with Next.js and MongoDB, this platform features customizable widgets, data visualization tools, real-time updates, and comprehensive reporting capabilities."
            image="/images/agg.png"
            demoUrl="https://auth.blinqpay.io/auth/login"
            repoUrl="#"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="Real Estate Platform"
            description="A modern real estate application for property listings and management. Features property search with filters, detailed property information, image galleries, agent contacts, and neighborhood insights with an intuitive user interface."
            image="/images/retor.jpg"
            demoUrl="https://realtor-app-pi.vercel.app/"
            repoUrl="https://github.com/eobikoru/Realtor-app"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="Blog Web Application"
            description="A feature-rich blogging platform built with React and Sanity CMS. Includes article categorization, commenting system, author profiles, rich text editing, and responsive design for optimal reading experience across all devices."
            image="/images/favicon.png"
            demoUrl="https://shareme-emeka-blog.netlify.app/"
            repoUrl="https://github.com/eobikoru/blogapp"
            tags={["React", "Sanity", "CSS", "Redux"]}
            type="web2"
          />
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
}: {
  title: string
  description: string
  image: string
  demoUrl: string
  repoUrl: string
  tags: string[]
  type: "web2" | "web3"
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
    <div className="bg-background rounded-lg overflow-hidden border border-border group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
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
            className={type === "web3" ? "bg-primary hover:bg-primary/90" : ""}
          >
            {type === "web3" ? "Web3" : "Web2"}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-secondary/20 hover:bg-secondary/30 border-border">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button asChild size="sm" variant="outline" className="flex-1 border-border hover:bg-secondary/20">
            <Link href={repoUrl} onClick={handleRepoClick}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button asChild size="sm" className="flex-1 bg-primary/90 hover:bg-primary">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

