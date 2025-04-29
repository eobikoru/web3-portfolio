"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { Globe, Wallet } from "lucide-react"

export function Skills() {
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
    <section ref={sectionRef} id="skills" className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div
            className={`inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium
              ${isVisible ? "animate-fade-in-down opacity-0 [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            My Expertise
          </div>
          <h2
            className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-gradient
              ${isVisible ? "animate-slide-up-fade opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-sm md:text-base text-muted-foreground max-w-2xl mx-auto
              ${isVisible ? "animate-slide-up-fade opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            A comprehensive set of skills spanning both Web2 and Web3 development ecosystems
          </p>
        </div>

        {/* Stack the sections vertically on mobile */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className={`bg-secondary/10 p-5 md:p-8 rounded-lg border border-border backdrop-blur-sm hover:bg-secondary/20 transition-colors
              ${isVisible ? "animate-slide-in-left opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-primary animate-spin-slow" />
              Web2 Technologies
            </h3>

            {/* Adjust grid columns based on screen size */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              <SkillCard title="Next.js" level="Advanced" delay={0} isVisible={isVisible}>
                Server components, App Router, API routes, SSR/SSG
              </SkillCard>
              <SkillCard title="React" level="Advanced" delay={100} isVisible={isVisible}>
                Hooks, Context API, Redux, React Query
              </SkillCard>
              <SkillCard title="TypeScript" level="Advanced" delay={200} isVisible={isVisible}>
                Type safety, interfaces, generics, utility types
              </SkillCard>
              <SkillCard title="Node.js" level="Advanced" delay={300} isVisible={isVisible}>
                Express, REST APIs, authentication, middleware
              </SkillCard>
              <SkillCard
                title="UI/UX"
                level="Advanced"
                delay={400}
                isVisible={isVisible}
                className="sm:col-span-2 md:col-span-1"
              >
                Tailwind CSS, Figma, responsive design
              </SkillCard>
            </div>
          </div>

          <div
            className={`bg-secondary/10 p-5 md:p-8 rounded-lg border border-border backdrop-blur-sm hover:bg-secondary/20 transition-colors
              ${isVisible ? "animate-slide-in-right opacity-0 [animation-delay:700ms] [animation-fill-mode:forwards]" : "opacity-0"}`}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-purple-400 animate-float" />
              Web3 Technologies
            </h3>

            {/* Adjust grid columns based on screen size */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              <SkillCard title="Solidity" level="Advanced" delay={0} isVisible={isVisible}>
                Smart contracts, ERC standards, gas optimization
              </SkillCard>
              <SkillCard title="Ethereum" level="Advanced" delay={100} isVisible={isVisible}>
                EVM, transactions, events, Hardhat, Truffle
              </SkillCard>
              <SkillCard title="Web3.js/ethers.js" level="Advanced" delay={200} isVisible={isVisible}>
                Contract interaction, wallet integration
              </SkillCard>
              <SkillCard title="Wagmi" level="Advanced" delay={300} isVisible={isVisible}>
                Contract interaction, wallet integration
              </SkillCard>
              <SkillCard title="IPFS" level="Advanced" delay={400} isVisible={isVisible}>
                Decentralized storage, content addressing
              </SkillCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  level,
  children,
  className = "",
  delay = 0,
  isVisible = false,
}: {
  title: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  children: React.ReactNode
  className?: string
  delay?: number
  isVisible?: boolean
}) {
  const levelColors = {
    Beginner: "bg-secondary text-secondary-foreground",
    Intermediate: "bg-blue-500/20 text-blue-300",
    Advanced: "bg-purple-500/20 text-purple-300",
    Expert: "bg-primary/20 text-primary-foreground",
  }

  return (
    <div
      className={`border border-border bg-background/50 rounded-md p-3 md:p-4 hover:bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 ${className}
        ${isVisible ? `animate-fade-in-up opacity-0 [animation-delay:${800 + delay}ms] [animation-fill-mode:forwards]` : "opacity-0"}`}
    >
      <div className="flex flex-wrap justify-between items-center gap-2 mb-1 md:mb-2">
        <h4 className="font-medium text-sm md:text-base">{title}</h4>
        <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${levelColors[level]} animate-pulse-slow`}>
          {level}
        </span>
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">{children}</p>
    </div>
  )
}
