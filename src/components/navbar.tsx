// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, Frame, Github, Linkedin, Twitter } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" },
//   ]

//   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault()

//     // Close mobile menu if open
//     if (isOpen) {
//       setIsOpen(false)
//     }

//     // If it's the home link and href is just "#"
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       })
//       return
//     }

//     // For other sections
//     const element = document.querySelector(href)
//     if (element) {
//       const navbarHeight = 64 // Adjust this value based on your navbar height
//       const elementPosition = element.getBoundingClientRect().top + window.scrollY
//       const offsetPosition = elementPosition - navbarHeight

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       })
//     }
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="#" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, "#")}>
//             <Frame className="h-8 w-8 text-primary" />
//             <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
//               Obikoru Daniel 
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
//                 onClick={(e) => scrollToSection(e, item.href)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Social Icons - Desktop */}
//           <div className="hidden md:flex items-center space-x-4">
//   <Link
//     href="https://github.com/eobikoru"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-muted-foreground hover:text-foreground transition-colors"
//   >
//     <Github className="h-5 w-5" />
//     <span className="sr-only">GitHub</span>
//   </Link>
//   <Link
//     href="https://x.com/EDaniel82349642"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-muted-foreground hover:text-foreground transition-colors"
//   >
//     <Twitter className="h-5 w-5" />
//     <span className="sr-only">Twitter</span>
//   </Link>
//   <Link
//     href="https://www.linkedin.com/in/emeka-obikoru-4551a1217/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-muted-foreground hover:text-foreground transition-colors"
//   >
//     <Linkedin className="h-5 w-5" />
//     <span className="sr-only">LinkedIn</span>
//   </Link>
// </div>


//           {/* Mobile Menu Button */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-lg">
//               <div className="flex flex-col h-full">
//                 <div className="flex items-center justify-between py-4 border-b border-border">
//                   <Link
//                     href="#"
//                     className="flex items-center space-x-2"
//                     onClick={(e) => {
//                       scrollToSection(e, "#")
//                       setIsOpen(false)
//                     }}
//                   >
//                     <Frame className="h-8 w-8 text-primary" />
//                     <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
//                       Web3Dev
//                     </span>
//                   </Link>
//                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
//                     <X className="h-5 w-5" />
//                     <span className="sr-only">Close menu</span>
//                   </Button>
//                 </div>

//                 <nav className="flex flex-col space-y-6 py-8">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-foreground hover:text-primary transition-colors text-lg font-medium"
//                       onClick={(e) => scrollToSection(e, item.href)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>

//                 <div className="mt-auto border-t border-border pt-6 pb-4">
//                   <div className="flex items-center justify-center space-x-6">
//                     <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                       <Github className="h-5 w-5" />
//                       <span className="sr-only">GitHub</span>
//                     </Link>
//                     <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                       <Twitter className="h-5 w-5" />
//                       <span className="sr-only">Twitter</span>
//                     </Link>
//                     <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                       <Linkedin className="h-5 w-5" />
//                       <span className="sr-only">LinkedIn</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Frame, Github, Linkedin, Twitter, FileCode2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Smart Contracts", href: "/smart-contracts" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If it's an internal page link, navigate normally
    if (href.startsWith("/") && !href.includes("#")) {
      window.location.href = href
      return
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }

    // If it's the home link and href is just "#"
    if (href === "/") {
      window.location.href = "/"
      return
    }

    // For hash links on the same page
    if (href.includes("#")) {
      const hash = href.substring(href.indexOf("#"))

      // If we're already on the homepage, scroll to the section
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const element = document.querySelector(hash)
        if (element) {
          const navbarHeight = 64 // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      } else {
        // If we're on another page, navigate to homepage with the hash
        window.location.href = href
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, "/")}>
            <Frame className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Web3Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name === "Smart Contracts" ? (
                  <span className="flex items-center">
                    <FileCode2 className="mr-1 h-4 w-4" />
                    {item.name}
                  </span>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
                 {/* Social Icons - Desktop */}
                 <div className="hidden md:flex items-center space-x-4">
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


          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={(e) => {
                      scrollToSection(e, "/")
                      setIsOpen(false)
                    }}
                  >
                    <Frame className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                      Web3Dev
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <nav className="flex flex-col space-y-6 py-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.name === "Smart Contracts" ? (
                        <span className="flex items-center">
                          <FileCode2 className="mr-2 h-5 w-5" />
                          {item.name}
                        </span>
                      ) : (
                        item.name
                      )}
                    </Link>
                  ))}
                </nav>

                   {/* Social Icons - Desktop */}
                   <div className="hidden md:flex items-center space-x-4">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

