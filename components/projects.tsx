import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Building2, User } from "lucide-react"

const companyProjects = [
  {
    title: "PHI Scrubber",
    company: "Key Software Inc.",
    duration: "2024 - 2025",
    description:
      "Developed a PHI (Protected Health Information) Scrubbing application to identify and anonymize sensitive data across large databases. The solution applied configurable scrub rules for each PHI data type and ensured compliance with data privacy requirements. The system included a client-friendly Angular UI, MS SQL Server backend, and a console-based engine responsible for the scrubbing process.",
    image: "/phi-scrubber.png",
    technologies: ["C#", "ASP.NET Core", "Angular", "MS SQL Server"],
    achievements: [
      "Led end-to-end development from requirement gathering to deployment",
      "Designed and implemented a client-attractive UI tailored to business needs",
      "Built the scrubbing engine as a console application to process large datasets efficiently",
      "Implemented task pause and resume functionality for long-running scrubbing operations"
    ],
    role: "Software Engineer",
    teamSize: "3 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Data Quality Tool",
    company: "Key Software Inc.",
    duration: "2024 - 2025",
    description:
      "Developed a custom Data Quality Tool to identify and monitor data inconsistencies across different data sources. The application allowed configuration-driven validation and provided an attractive dashboard for reporting, while the engine was powered by Python using the SODA library.",
    image: "/data-quality-tool.png",
    technologies: ["C#", "ASP.NET", "Python", "SODA (Python Library)", "My SQL"],
    achievements: [
      "Took complete responsibility and ownership in delivering the project successfully",
      "Designed and developed the end-to-end solution including backend, frontend, and engine",
      "Built an intuitive dashboard to visualize data quality metrics and results"
    ],
    role: "Software Engineer",
    teamSize: "2 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Blazor Diagram Component",
    company: "Syncfusion",
    duration: "2022 - 2024",
    description:
      "Contributed to the development of the Blazor Diagram Component, focusing on implementing user-requested features, resolving tickets, and enhancing overall performance. Also automated unit test cases with Playwright to improve testing reliability.",
    image: "/blazor-diagram-component.png",
    technologies: ["C#", "Blazor", ".NET"],
    achievements: [
      "Developed and delivered multiple user-requested features in the Diagram component",
      "Resolved customer-reported tickets with effective debugging and fixes",
      "Automated unit test cases using Playwright, improving test coverage and efficiency"
    ],
    role: "Junior Software Developer",
    teamSize: "4 developers",
    liveUrl: "https://blazor.syncfusion.com/documentation/diagram/overview",
    githubUrl: "#",
    featured: true
  },
]

const personalProjects = [
  {
    title: "Portfolio Website Builder",
    description:
      "A drag-and-drop portfolio builder with customizable templates, real-time preview, and one-click deployment. Built to help developers create professional portfolios quickly.",
    image: "/portfolio-builder-interface.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Prisma"],
    liveUrl: "https://portfolio-builder-demo.com",
    githubUrl: "https://github.com/yourusername/portfolio-builder",
    status: "Live",
    users: "500+ users",
    featured: true,
  },
  {
    title: "Expense Tracker App",
    description:
      "A comprehensive expense tracking application with budget planning, category management, and detailed analytics. Features offline support and data synchronization.",
    image: "/expense-tracker-mobile-app.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "https://expense-tracker-demo.com",
    githubUrl: "https://github.com/yourusername/expense-tracker",
    status: "Live",
    users: "200+ downloads",
    featured: true,
  },
  {
    title: "Weather Forecast API",
    description:
      "RESTful API providing accurate weather forecasts with historical data analysis, location-based services, and customizable alerts. Serves multiple client applications.",
    image: "/weather-api-dashboard.jpg",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    liveUrl: "https://weather-api-docs.com",
    githubUrl: "https://github.com/yourusername/weather-api",
    status: "Live",
    users: "1000+ API calls/day",
    featured: false,
  },
  {
    title: "Task Automation Tool",
    description:
      "A productivity tool that automates repetitive tasks with custom workflows, scheduled executions, and integration with popular services like Slack, Gmail, and Trello.",
    image: "/task-automation-workflow.png",
    technologies: ["Python", "Selenium", "Flask", "SQLite", "Celery"],
    liveUrl: "https://task-automation-demo.com",
    githubUrl: "https://github.com/yourusername/task-automation",
    status: "In Development",
    users: "Beta testing",
    featured: false,
  },
]

function ProjectCard({ project, type }: { project: any; type: "company" | "personal" }) {
  const isCompany = type === "company"

  return (
    <Card
      className={`overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col ${project.featured ? "ring-2 ring-primary/20" : ""}`}
    >
      {/* <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div> */}

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
          </div>

          {isCompany && (
            <div className="space-y-1">
              <p className="text-sm font-medium text-primary">{project.company}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{project.duration}</span>
                <span>{project.role}</span>
                <span>{project.teamSize}</span>
              </div>
            </div>
          )}

          {!isCompany && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span
                className={`px-2 py-1 rounded-full ${project.status === "Live" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
              >
                {project.status}
              </span>
              <span>{project.users}</span>
            </div>
          )}

          <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

          {isCompany && project.achievements && (
            <div className="space-y-2 mt-4">
              <h4 className="text-sm font-medium text-foreground">Key Achievements:</h4>
              <ul className="text-xs text-muted-foreground space-y-1 min-h-[60px]">
                {project.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* <div className="flex items-center gap-3">
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                {isCompany ? "View Details" : "Live Demo"}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3 mr-2" />
                Code
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </Card>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Projects & Experience</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A comprehensive showcase of my professional work and personal projects, demonstrating 3 years of experience
            in full-stack development and problem-solving.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Professional Experience</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="company" />
            ))}
          </div>
        </div>

        {/* <div>
          <div className="flex items-center gap-3 mb-8">
            <User className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">Personal Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="personal" />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
