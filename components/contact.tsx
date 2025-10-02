import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, creative projects, or just having a chat about
            technology and development.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:alex@example.com" className="text-foreground hover:text-primary transition-colors text-lg">
              dhilipkumar0110@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors text-lg">
              8925245622
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground text-lg">Tamil Nadu, India</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <a
            href="https://github.com/dhilipkumar0110"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <Github className="h-6 w-6 text-card-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhilipkumar-01102k/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <Linkedin className="h-6 w-6 text-card-foreground" />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <Twitter className="h-6 w-6 text-card-foreground" />
          </a> */}
        </div>

        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Dhilip Kumar. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
