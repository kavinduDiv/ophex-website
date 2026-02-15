import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { products } from "@/data/products";

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // 5 seconds per slide
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Pause on interaction
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

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">

          {/* Main Slider Area */}
          <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-900 border border-slate-800">

            {products.map((product, index) => {
              const isActive = index === activeIndex;
              // Determine if it was "previous" to slide out? For simple cross-fade/slide, use absolute positioning.

              return (
                <div
                  key={product.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform
                    ${isActive ? "opacity-100 translate-x-0 z-20" :
                      index < activeIndex ? "opacity-0 -translate-x-full z-10" : "opacity-0 translate-x-full z-10"
                    }
                    ${isActive ? "scale-100" : "scale-95"}
                  `}
                >
                  {/* Image Background with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Gradient Overlay - Stronger at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
                  </div>

                  {/* Content Content Container */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <div className={`transform transition-all duration-700 delay-100 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>

                      {/* Badge / Subtitle */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm border border-primary/20">
                        <product.icon size={16} />
                        <span>{product.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Feature Tags (Desktop) */}
                      <div className="hidden md:flex flex-wrap gap-3 mb-8">
                        {product.features.slice(0, 3).map((feat, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 text-slate-200 text-sm rounded-md border border-white/10 backdrop-blur-sm">
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
                          <Link to={`/products/${product.id}`}>
                            Explore Details
                            <ArrowRight size={18} />
                          </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                          <Link to="/#contact">Book Demo</Link>
                        </Button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={() => { handlePrev(); setIsAutoPlaying(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-primary text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 group disabled:opacity-50"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => { handleNext(); setIsAutoPlaying(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-primary text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 group"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 right-8 z-30 flex gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Control (Subtle) */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-30 p-2 text-white/50 hover:text-white transition-colors"
              title={isAutoPlaying ? "Pause Autoplay" : "Start Autoplay"}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

          </div>

          {/* New: Thumbnails / Preview of others below? Optional, keeping streamlined for now */}

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
