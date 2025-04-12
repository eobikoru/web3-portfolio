"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const downloadResume = () => {
    // This is a placeholder. In a real implementation, you would:
    // 1. Either link to an actual file in your public directory
    // 2. Or generate a file dynamically and trigger a download

    // // For demonstration, we'll create a simple alert
    // alert("Resume download would start here. In a real implementation, link this to your actual resume file.")

    // Example of how you would trigger a download for a file in the public directory:
    const link = document.createElement('a')
    link.href = '/images/fincv.pdf'
    link.download = 'developer-resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:opacity-75 transition-opacity duration-300" />
              <Image
                src="/images/cvr.png"
                alt="Developer portrait"
                width={320}
                height={320}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Bridging Web2 & Web3
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate full-stack developer specializing in both Web2 and Web3 technologies. With expertise in
              Next.js and Solidity, I build modern, scalable applications that bridge the gap between traditional web
              development and blockchain technology.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey began with traditional web development, mastering JavaScript, React, and Node.js. As blockchain
              technology emerged, I expanded my skills to include Solidity, Ethereum, and Web3.js, allowing me to create
              decentralized applications that leverage the best of both worlds.
            </p>
            <p className="text-muted-foreground mb-6">
              I'm constantly learning and exploring new technologies to stay at the forefront of this rapidly evolving
              field.
            </p>

            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-md"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

