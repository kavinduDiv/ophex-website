import ScrollReveal from "@/components/animations/ScrollReveal";
import { useEffect, useRef } from "react";
const logoModules = import.meta.glob<{ default: string }>('@/assets/OPHEX-Clients/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const formatCompanyName = (fileName: string) => {
  // Strip out the -bg indicator before parsing the name
  const cleanName = fileName.replace(/[-_]bg$/i, '');
  return cleanName
    .split(/[-_]+/)
    .map(word => {
      // Handle special single letters or lowercase cases
      if (word.toLowerCase() === 's') return 'S';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

const baseClients = Object.entries(logoModules).map(([path, module]) => {
  const fileName = path.split('/').pop()?.split('.')[0] || "Unknown Client";
  const hasBg = /[-_]bg$/i.test(fileName);

  return {
    name: formatCompanyName(fileName),
    image: module.default,
    hasBg
  };
});

const ClientsSection = () => {
  // Duplicate enough times to ensure smooth infinite scrolling without sudden resets
  const duplicatedClients = Array(8).fill(baseClients).flat();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const checkFocus = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('.client-logo-wrapper');
      const viewportCenter = window.innerWidth / 2;
      const focusZoneRadius = 120; // Highlight items within this many pixels of the center

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        // Skip items that are completely off-screen to save calculations
        if (rect.right < 0 || rect.left > window.innerWidth) {
          item.removeAttribute('data-focused');
          return;
        }

        const itemCenter = rect.left + rect.width / 2;
        if (Math.abs(itemCenter - viewportCenter) < focusZoneRadius) {
          item.setAttribute('data-focused', 'true');
        } else {
          item.removeAttribute('data-focused');
        }
      });

      animationFrameId = requestAnimationFrame(checkFocus);
    };

    checkFocus();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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
        ref={containerRef}
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
              className="client-logo-wrapper group flex-shrink-0 mx-20 flex flex-col items-center justify-center relative w-32 h-32"
            >
              <img
                src={client.image}
                alt={client.name}
                className={`w-32 h-32 object-contain cursor-pointer transition-all duration-500 ease-in-out
                           group-hover:scale-125 group-data-[focused=true]:scale-125
                           group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)] group-data-[focused=true]:drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]
                           active:scale-110 ${client.hasBg
                    ? "grayscale opacity-40 brightness-150 contrast-75 group-hover:grayscale-0 group-data-[focused=true]:grayscale-0 group-hover:opacity-100 group-data-[focused=true]:opacity-100 group-hover:brightness-100 group-data-[focused=true]:brightness-100 group-hover:contrast-100 group-data-[focused=true]:contrast-100"
                    : "brightness-0 invert opacity-60 group-hover:brightness-100 group-data-[focused=true]:brightness-100 group-hover:invert-0 group-data-[focused=true]:invert-0 group-hover:opacity-100 group-data-[focused=true]:opacity-100"
                  }`}
              />

              {/* Company Name Reveal */}
              <span
                className="absolute -bottom-8 text-sm font-semibold text-primary opacity-0 translate-y-2 pointer-events-none whitespace-nowrap
                           transition-all duration-500 ease-out
                           group-hover:opacity-100 group-data-[focused=true]:opacity-100 
                           group-hover:translate-y-0 group-data-[focused=true]:translate-y-0"
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
