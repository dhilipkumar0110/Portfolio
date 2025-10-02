import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
 
  {
    period: "Jan 2024 — PRESENT",
    title: "Software Engineer",
    company: "Key Software Inc.",
    location: "Chennai, India",
    type: "Full-time",
    description: "Working as a full-stack developer across multiple projects, contributing to all phases of the software development lifecycle including requirement gathering, design, development, testing, and deployment. Responsible for building scalable and maintainable applications using modern .NET and Angular technologies.",
    keyAchievements: [
      "Delivered end-to-end solutions by handling backend, frontend, and database layers",
      "Worked on multiple projects simultaneously, ensuring quality and timely delivery",
      "Collaborated closely with stakeholders to gather requirements and translate them into technical solutions",
      "Improved deployment and testing workflows to streamline release cycles"
    ],
    technologies: ["ASP.NET", "ASP.NET Core", "Angular", "MS SQL Server", "C#", ".NET"],
    link: "https://www.keysoftwareinc.com/"
  },
  {
    period: "Nov 2022 — Jan 2024",
    title: "Junior Software Developer",
    company: "Syncfusion",
    location: "Chennai, India",
    type: "Full-time",
    description: "Contributed to the development and testing of Syncfusion’s Blazor components, focusing on delivering reliable and feature-rich solutions. Worked closely with the team to build user-requested features and ensure quality through automation.",
    keyAchievements: [
      "Developed and delivered user-requested features in the Diagram component",
      "Resolved multiple customer tickets with effective debugging and solutions",
      "Automated unit test cases using Playwright, improving test efficiency and reliability"
    ],
    technologies: ["C#", "Blazor", "Playwright", ".NET"],
    link: "https://www.syncfusion.com/"
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
