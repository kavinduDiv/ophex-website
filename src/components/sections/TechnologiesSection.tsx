import ScrollReveal from "@/components/animations/ScrollReveal";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
];

const TechnologiesSection = () => {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <section id="technologies" className="py-24 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-morph" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Cutting-Edge <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage the latest technologies to build robust, scalable, 
            and future-proof solutions.
          </p>
        </ScrollReveal>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category}
              variant="fade-up"
              delay={categoryIndex * 100}
            >
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {technologies
                  .filter((t) => t.category === category)
                  .map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="px-6 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default hover-scale group"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
