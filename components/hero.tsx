"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">Dhilip Kumar</h1>
            <h2 className="text-xl lg:text-2xl text-primary font-medium">Software Engineer | Full Stack Developer</h2>
             <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I specialize in building scalable web applications with{" "}
              <span className="text-accent font-medium">.NET</span>,{" "}
              <span className="text-accent font-medium">Angular</span>, and{" "}
              <span className="text-accent font-medium">SQL Server</span>. 
              With 3+ years of experience, I enjoy working across the full 
              software development lifecycle — from requirements and design 
              to development, testing, and deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")}>
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <a
              href="https://github.com/dhilipkumar0110"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-5 w-5 text-secondary-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhilipkumar-01102k/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-secondary-foreground" />
            </a>
            <a
              href="mailto:dhilipkumar0110@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Mail className="h-5 w-5 text-secondary-foreground" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                <div className="text-4xl">👨‍💻</div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Currently building at</p>
                <p className="text-lg font-semibold text-primary">Key Software Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
