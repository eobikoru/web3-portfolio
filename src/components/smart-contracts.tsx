import Link from "next/link"
import { ExternalLink, Github, FileCode2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SmartContracts() {
  return (
    <section id="smart-contracts" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
            Blockchain Development
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Smart Contracts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my Solidity smart contracts and blockchain development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContractCard
            title="Auto Rebalancing Hook"
            description="A Uniswap v4 hook that automatically rebalances liquidity pools based on market conditions and adjusts fees dynamically to optimize returns for liquidity providers (LPs)"
            githubUrl="https://github.com/DexCrawlers/AutoRebalancingHook"
            tags={["Solidity", "ERC-721", "OpenZeppelin", "Hardhat"]}
          />

          <ContractCard
            title="Time-Weighted Average Market Maker"
            description="TWAMMHook is a Uniswap v4 hook that executes large trades gradually over time, reducing price impact and MEV exposure while enabling automated dollar-cost averaging for all users. It brings institutional-grade execution to DeFi, allowing traders to swap significant amounts with minimal market disruption."
            githubUrl="https://github.com/DexCrawlers/tmaww-stylus.git"
            tags={["Solidity", "ERC-20", "DeFi", "Hardhat"]}
          />
            <ContractCard
              title="DAO Governance"
              description="A DAO (Decentralized Autonomous Organization) governance system for a decentralized insurance protocol."
              githubUrl="https://github.com/eobikoru/Doa"
              tags={["Solidity", "Governance", "ERC-20", "Hardhat"]}
            />
         <ContractCard
            title="ALPHA"
            description="Alpha is a Web3-native platform where creators and Key Opinion Leaders (KOLs) monetize their expertise by sharing curated tools and offering time for consultations or mentorship sessions"
            githubUrl="https://github.com/eobikoru/alpha-main"
            tags={["Solidity", "ERC-20", "OpenZeppelin","Hardhat"]}
          />
         <ContractCard
            title="Host Contract"
            description="A ERC1155 token contract implements a multi-token standard with role-based access control, allowing for the creation, management, and tracking of multiple token types within a single contract while providing administrative functions for pausing, minting, and URI management."
            githubUrl="https://github.com/eobikoru/host-it-contract"
            tags={["Solidity", "ERC-20", "OpenZeppelin","foundry","ERC1155"]}
          />

       

          {/* <ContractCard
            title="Multi-Signature Wallet"
            description="A secure multi-signature wallet that requires multiple approvals for transactions. Includes owner management, daily limits, and transaction history."
            githubUrl="https://github.com/yourusername/multi-sig-wallet"
            tags={["Solidity", "Security", "Wallet", "Hardhat"]}
          />

          <ContractCard
            title="ERC-20 Token with Extensions"
            description="An extended ERC-20 token implementation with additional features like pausable transfers, token burning, minting capabilities, and snapshot functionality."
            githubUrl="https://github.com/yourusername/erc20-extensions"
            tags={["Solidity", "ERC-20", "OpenZeppelin", "Truffle"]}
          /> */}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">View more of my smart contract development work on GitHub</p>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
          >
            <Link href="https://github.com/eobikoru" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View GitHub Profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContractCard({
  title,
  description,
  githubUrl,
  tags,
}: {
  title: string
  description: string
  githubUrl: string
  tags: string[]
}) {
  return (
    <Card className="bg-background border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-2">
          <FileCode2 className="h-5 w-5 text-primary mt-1" />
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-secondary/20 hover:bg-secondary/30 border-border">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" size="sm" className="border-border hover:bg-secondary/20">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Link>
        </Button>
{/* 
        <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
          <Link href={`${githubUrl}/blob/main/contracts`} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Explore
          </Link>
        </Button> */}
      </CardFooter>
    </Card>
  )
}
