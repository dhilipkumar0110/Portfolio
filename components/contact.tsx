import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, creative projects, or just having a chat about
              technology and development.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:alex@example.com" className="text-foreground hover:text-primary transition-colors">
                  alex@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">San Francisco, CA</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
              >
                <Github className="h-5 w-5 text-card-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-card-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
              >
                <Twitter className="h-5 w-5 text-card-foreground" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell me about your project or just say hello!" rows={6} />
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Alex Johnson. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
