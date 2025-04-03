import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
            title="DeFi Dashboard"
            description="A comprehensive dashboard for tracking DeFi investments across multiple chains with portfolio analytics."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Next.js", "TypeScript", "Ethers.js", "Tailwind CSS"]}
            type="web3"
          />

          <ProjectCard
            title="NFT Marketplace"
            description="A full-featured NFT marketplace with minting, trading, and auction functionality built on Ethereum."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Solidity", "Next.js", "IPFS", "Web3.js"]}
            type="web3"
          />

          <ProjectCard
            title="SaaS Platform"
            description="A subscription-based SaaS application with user authentication, payments, and a dashboard."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Next.js", "Prisma", "Stripe", "TypeScript"]}
            type="web2"
          />

          <ProjectCard
            title="E-commerce Store"
            description="A modern e-commerce platform with product catalog, cart functionality, and checkout process."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Next.js", "MongoDB", "Tailwind CSS", "Redux"]}
            type="web2"
          />

          <ProjectCard
            title="DAO Governance"
            description="A decentralized autonomous organization with proposal creation, voting, and treasury management."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Solidity", "React", "The Graph", "Hardhat"]}
            type="web3"
          />

          <ProjectCard
            title="Content Platform"
            description="A content management system with rich text editing, media uploads, and user subscriptions."
            image="/placeholder.svg?height=400&width=600"
            demoUrl="#"
            repoUrl="#"
            tags={["Next.js", "PostgreSQL", "AWS S3", "Auth.js"]}
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
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-secondary/20 hover:bg-secondary/30 border-border">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button asChild size="sm" variant="outline" className="flex-1 border-border hover:bg-secondary/20">
            <Link href={repoUrl}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button asChild size="sm" className="flex-1 bg-primary/90 hover:bg-primary">
            <Link href={demoUrl}>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

