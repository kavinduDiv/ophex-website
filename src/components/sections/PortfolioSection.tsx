import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";

const categories = ["All", "Web", "Mobile", "E-Commerce", "Software"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "Full-featured online store with payment integration",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 2,
    title: "Healthcare App",
    category: "Mobile",
    description: "Patient management and telemedicine solution",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web",
    description: "Modern corporate identity and web presence",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 4,
    title: "Inventory System",
    category: "Software",
    description: "Enterprise inventory management solution",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile",
    description: "Real-time order tracking and delivery management",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Web",
    description: "Property listing and virtual tour platform",
    color: "from-amber-500 to-yellow-600",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-morph" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful projects delivered to clients worldwide.
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal variant="fade-up" delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full transition-all duration-300 hover-scale"
            >
              {category}
            </Button>
          ))}
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              variant="zoom-in"
              delay={index * 100}
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer hover-lift">
                {/* Gradient Background */}
                <div className={`h-64 bg-gradient-to-br ${project.color} animate-gradient-shift`} style={{ backgroundSize: "200% 200%" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                </div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary-foreground/60 text-sm mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">View Project</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
