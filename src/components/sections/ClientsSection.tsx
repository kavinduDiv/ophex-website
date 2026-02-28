import ScrollReveal from "@/components/animations/ScrollReveal";
import momoKidsStore from "@/assets/OPHEX-Clients/momo-kids-store.png";
import monsoonTailors from "@/assets/OPHEX-Clients/monsoon-tailors.png";
import rasoja from "@/assets/OPHEX-Clients/rasoja.png";

const clients = [
  { name: "Momo Kids Store", image: momoKidsStore },
  { name: "Monsoon Tailors", image: monsoonTailors },
  { name: "Rasoja", image: rasoja },
  // Duplicate for smoother marquee looping since there are only 3 distinct clients
  { name: "Momo Kids Store", image: momoKidsStore },
  { name: "Monsoon Tailors", image: monsoonTailors },
  { name: "Rasoja", image: rasoja },
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

        <div className="flex animate-marquee py-8">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex-shrink-0 mx-8 flex flex-col items-center justify-center cursor-pointer"
            >
              <div
                className="w-32 h-32 rounded-full bg-card/50 flex items-center justify-center p-4 border border-border/50 
                           transition-all duration-500 ease-in-out
                           group-hover:border-orange-500/50 group-hover:bg-card
                           hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                           active:scale-95"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain 
                             grayscale opacity-60 brightness-150 contrast-75 /* whitish ash effect */
                             transition-all duration-500 ease-in-out
                             group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100"
                />
              </div>

              {/* Company Name Reveal */}
              <span
                className="mt-4 text-sm font-semibold text-primary opacity-0 translate-y-2 
                           transition-all duration-500 ease-out
                           group-hover:opacity-100 group-hover:translate-y-0"
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
