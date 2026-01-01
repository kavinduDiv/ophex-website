import ScrollReveal from "@/components/animations/ScrollReveal";

const clients = [
  { name: "TechCorp", initials: "TC" },
  { name: "Innovate Inc", initials: "II" },
  { name: "DataFlow", initials: "DF" },
  { name: "CloudBase", initials: "CB" },
  { name: "NetSolutions", initials: "NS" },
  { name: "DigitalEdge", initials: "DE" },
  { name: "SmartTech", initials: "ST" },
  { name: "FutureLabs", initials: "FL" },
  { name: "CodeMasters", initials: "CM" },
  { name: "WebPro", initials: "WP" },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float-fast" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-float-medium" />
      </div>

      <ScrollReveal variant="fade-up" className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Companies That Trust Us
          </h2>
        </div>
      </ScrollReveal>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-40 h-20 bg-card rounded-xl shadow-card flex items-center justify-center border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover-scale">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{client.initials}</span>
                  </div>
                  <span className="font-semibold text-sm text-foreground/80">{client.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
