import { Briefcase, Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
            My Journey
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and educational background</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-3">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              <ExperienceCard
                title="Senior Blockchain Developer"
                company="Web3 Innovations"
                period="2022 - Present"
                description="Leading the development of decentralized applications and smart contracts for enterprise clients. Architecting scalable solutions using Solidity, Ethereum, and Next.js."
                skills={["Solidity", "Ethereum", "Next.js", "The Graph", "IPFS"]}
              />

              <ExperienceCard
                title="Full Stack Developer"
                company="Digital Solutions Inc."
                period="2020 - 2022"
                description="Developed and maintained web applications using React, Node.js, and MongoDB. Implemented responsive designs and RESTful APIs for various client projects."
                skills={["React", "Node.js", "MongoDB", "TypeScript", "AWS"]}
              />

              <ExperienceCard
                title="Frontend Developer"
                company="Tech Startups Ltd."
                period="2018 - 2020"
                description="Built user interfaces for SaaS products using React and Redux. Collaborated with designers to implement responsive and accessible web applications."
                skills={["React", "Redux", "JavaScript", "CSS", "Git"]}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 mr-3">
                <GraduationCap className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Education & Certifications</h3>
            </div>

            <div className="space-y-6">
                <EducationCard
                  title="Blockchain Developer Certification"
                  institution="Uniswap"
                  period="2024"
                  description="Comprehensive certification covering Ethereum development, smart contract security, and decentralized application architecture and Uniswap v4 hooks."
                />
              <EducationCard
                title="Blockchain Developer Certification"
                institution="Sail"
                period="2023"
                description="Comprehensive certification covering Ethereum development, smart contract security, and decentralized application architecture."
              />


              <EducationCard
                title="Frontend development Frontend development"
                institution="Braintem"
                period="2019"
                description="Foundations in computer science, algorithms, data structures, and software development methodologies."
              />
              <EducationCard
                title="Edu Pyschology"
                institution="University of lagos"
                period="2018"
                description="Foundations in Pyschology"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}) {
  return (
    <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-base font-medium text-foreground/80">{company}</CardDescription>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs bg-secondary/30 hover:bg-secondary/40">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function EducationCard({
  title,
  institution,
  period,
  description,
}: {
  title: string
  institution: string
  period: string
  description: string
}) {
  return (
    <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-base font-medium text-foreground/80">{institution}</CardDescription>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

