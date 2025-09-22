export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>

              <p>
                Currently, I'm a Senior Full-Stack Developer at{" "}
                <span className="text-primary font-medium">TechCorp Inc.</span>, specializing in modern web
                technologies. I contribute to the creation and maintenance of scalable applications that serve thousands
                of users, ensuring our platform meets web accessibility standards and best practices to deliver an
                inclusive user experience.
              </p>

              <p>
                In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                <span className="text-accent font-medium">innovative startups</span> and{" "}
                <span className="text-accent font-medium">established corporations</span> to{" "}
                <span className="text-accent font-medium">creative agencies</span> and{" "}
                <span className="text-accent font-medium">digital product studios</span>. Additionally, I also released
                a <span className="text-accent font-medium">comprehensive online course</span> a few years ago, guiding
                learners through building a modern web application with the latest technologies.
              </p>

              <p>
                In my spare time, I'm usually rock climbing, reading tech blogs, hanging out with my dog, or exploring
                new frameworks and tools to stay current with the rapidly evolving web development landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
