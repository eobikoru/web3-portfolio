import type React from "react"
import { Globe, Wallet } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
            My Expertise
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills spanning both Web2 and Web3 development ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/10 p-8 rounded-lg border border-border backdrop-blur-sm hover:bg-secondary/20 transition-colors">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-primary" />
              Web2 Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillCard title="Next.js" level="Advanced">
                Server components, App Router, API routes, SSR/SSG
              </SkillCard>
              <SkillCard title="React" level="Advanced">
                Hooks, Context API, Redux, React Query
              </SkillCard>
              <SkillCard title="TypeScript" level="Advanced">
                Type safety, interfaces, generics, utility types
              </SkillCard>
              <SkillCard title="Node.js" level="Advanced">
                Express, REST APIs, authentication, middleware
              </SkillCard>
            
              <SkillCard title="UI/UX" level="Intermediate">
                Tailwind CSS, Figma, responsive design
              </SkillCard>
            </div>
          </div>

          <div className="bg-secondary/10 p-8 rounded-lg border border-border backdrop-blur-sm hover:bg-secondary/20 transition-colors">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-purple-400" />
              Web3 Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillCard title="Solidity" level="Advanced">
                Smart contracts, ERC standards, gas optimization
              </SkillCard>
              <SkillCard title="Ethereum" level="Advanced">
                EVM, transactions, events, Hardhat, Truffle
              </SkillCard>
              <SkillCard title="Web3.js/ethers.js" level="Advanced">
                Contract interaction, wallet integration
              </SkillCard>
              <SkillCard title="IPFS" level="Intermediate">
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
}: {
  title: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  children: React.ReactNode
}) {
  const levelColors = {
    Beginner: "bg-secondary text-secondary-foreground",
    Intermediate: "bg-blue-500/20 text-blue-300",
    Advanced: "bg-purple-500/20 text-purple-300",
    Expert: "bg-primary/20 text-primary-foreground",
  }

  return (
    <div className="border border-border bg-background/50 rounded-md p-4 hover:bg-background/80 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${levelColors[level]}`}>{level}</span>
      </div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  )
}

