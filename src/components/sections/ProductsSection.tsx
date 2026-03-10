import { Link } from "react-router-dom";
import { ArrowRight, MoveRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { products } from "@/data/products";
import { useEffect, useRef, useState } from "react";

const ProductsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Restore scroll position from session storage
  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem("productsScrollPos");
    if (savedScrollPos && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = parseInt(savedScrollPos, 10);
      updateScrollProgress();
    }
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      sessionStorage.setItem("productsScrollPos", scrollLeft.toString());
      updateScrollProgress();
    }
  };

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress || 0); // fallback to 0 if NaN
    }
  };

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Innovative <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Scalable, enterprise-grade software designed to optimize your operations.
          </p>
        </ScrollReveal>

        {/* Mobile Swipe Indicator (Only visible on Mobile when not scrolled to end) */}
        <div className="md:hidden flex flex-col items-center mb-6 gap-2 opacity-70">
          <div className="flex items-center gap-2 text-primary text-sm font-medium animate-pulse">
            <MoveRight size={16} className="rotate-180" /> Swipe to explore <MoveRight size={16} />
          </div>
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.max(10, scrollProgress * 100)}%` }} // Minimum 10% width
            />
          </div>
        </div>

        {/* Responsive Grid Layout / Mobile Carousel */}
        {/* On Mobile: Flex row with horizontal scrolling and snap points. On Desktop: Standard Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto"
        >
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              variant="fade-up"
              // Mobile: min-w-[85vw] forces cards to take up most of the screen, creating the carousel. snap-center aligns them. 
              // Desktop: behaves as grid items
              className={`delay-${index * 100} group relative flex flex-col h-[500px] min-w-[85vw] md:min-w-0 snap-center shrink-0 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-500/50`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 h-1/2 overflow-hidden pointer-events-none rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover opacity-70 transition-all duration-500 bg-center group-hover:opacity-90 overflow-hidden rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent translate-y-0 via-slate-900/20 to-slate-900 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent translate-y-1 via-slate-900/20 to-slate-900 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent translate-y-2 via-slate-900/20 to-slate-900 transition-colors duration-500" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full p-6 pt-48">

                {/* Badge Container */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm bg-primary/10 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20 self-start transition-all duration-300 group-hover:bg-primary/20">
                  <product.icon size={14} className="text-primary group-hover:scale-110 duration-300" />
                  <span className="text-primary">{product.title}</span>
                </div>

                {/* Subtitle / Catchphrase */}
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-primary">
                  {product.subtitle}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-2 leading-relaxed flex-grow line-clamp-3">
                  {product.description}
                </p>

                {/* Action Button - Glides up seamlessly */}
                <Link to={`/products/${product.id}`} className="flex flex-col">

                  <div
                    className="group/pLink w-full inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium bg-slate-800 text-white gap-2 transition-all duration-300 border border-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg mt-auto"
                  >
                    Explore {product.title}
                    <MoveRight size={22} className="transition-transform duration-300 mt-1 group-hover/pLink:translate-x-2" />
                  </div>
                </Link>

              </div>

            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
