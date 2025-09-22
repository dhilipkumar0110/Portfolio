"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">Alex Johnson</div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeSection === item.href.slice(1) ? "secondary" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-sm"
              >
                {item.name}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={() => scrollToSection("#contact")} className="hidden md:block">
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
