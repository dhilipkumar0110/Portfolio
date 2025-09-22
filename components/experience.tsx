import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility and performance optimization.",
    keyAchievements: [
      "Led frontend architecture redesign improving performance by 40%",
      "Mentored 3 junior developers and established code review processes",
      "Implemented comprehensive testing strategies reducing bugs by 60%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"],
    link: "https://techcorp.com",
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    description:
      "Developed and shipped highly interactive web applications for both B2B and B2C audiences. Led the frontend architecture redesign that improved performance by 40% and implemented comprehensive testing strategies.",
    keyAchievements: [
      "Built scalable web applications serving 50,000+ daily active users",
      "Reduced application load time by 45% through optimization techniques",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    technologies: ["Next.js", "Python", "Django", "MongoDB", "Docker", "Redis", "Stripe API"],
    link: "https://startupxyz.com",
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    company: "Creative Agency Pro",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Worked with a team of designers and developers to build pixel-perfect, responsive websites and web applications for various clients. Specialized in creating smooth animations and interactive user experiences.",
    keyAchievements: [
      "Delivered 15+ client projects with 100% on-time completion rate",
      "Increased client satisfaction scores by 35% through improved UX",
      "Established responsive design standards adopted company-wide",
    ],
    technologies: ["Vue.js", "SCSS", "Figma", "WordPress", "PHP", "GSAP", "Three.js"],
    link: "https://creativeagencypro.com",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">Experience</h2>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:bg-card/80 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.keyAchievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
