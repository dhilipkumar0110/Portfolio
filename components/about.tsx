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
                I'm a software developer with over three years of experience working in the <span className="text-primary font-medium">.NET ecosystem</span>. 
                My journey began with building applications in <span className="text-accent font-medium">C#</span> and 
                <span className="text-accent font-medium"> ASP.NET</span>, and over time I’ve grown into developing 
                modern, scalable web applications that balance performance and usability.
              </p>

              <p>
                On the frontend, I’ve worked extensively with <span className="text-accent font-medium">Angular</span> to 
                deliver responsive and maintainable applications. Earlier in my career, I had the chance to build 
                <span className="text-accent font-medium"> Blazor applications</span> with Syncfusion components, which gave me 
                hands-on experience with building rich interactive UIs using .NET technologies.
              </p>

              <p>
                Currently, I’m part of <span className="text-primary font-medium">Key Software Inc.</span>, where I contribute 
                to the design and development of enterprise-level solutions. My focus is on writing clean, reliable code and 
                collaborating with teams to build products that make an impact.
              </p>

              <p>
                Outside of coding, I’m always exploring new frameworks, keeping up with the latest trends in software 
                development, and sharpening my skills to stay current in this ever-evolving industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
