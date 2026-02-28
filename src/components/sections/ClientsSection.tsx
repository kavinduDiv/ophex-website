import ScrollReveal from "@/components/animations/ScrollReveal";
import momoKidsStore from "@/assets/OPHEX-Clients/momo-kids-store.png";
import monsoonTailors from "@/assets/OPHEX-Clients/monsoon-tailors.png";
import rasoja from "@/assets/OPHEX-Clients/rasoja.png";

const baseClients = [
  { name: "Momo Kids Store", image: momoKidsStore },
  { name: "Monsoon Tailors", image: monsoonTailors },
  { name: "Rasoja", image: rasoja },
];

const ClientsSection = () => {
  // Duplicate enough times to ensure smooth infinite scrolling without sudden resets
  const duplicatedClients = Array(8).fill(baseClients).flat();

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
      <div
        className="relative overflow-hidden py-8"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "-webkit-linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
        }}
      >
        <div className="flex animate-marquee w-max">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex-shrink-0 mx-20 flex flex-col items-center justify-center relative w-32 h-32"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-32 h-32 object-contain cursor-pointer
                           grayscale opacity-40 brightness-150 contrast-75 /* whitish ash effect */
                           transition-all duration-500 ease-in-out
                           group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100
                           group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]
                           active:scale-110"
              />

              {/* Company Name Reveal */}
              <span
                className="absolute -bottom-8 text-sm font-semibold text-primary opacity-0 translate-y-2 pointer-events-none whitespace-nowrap
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
