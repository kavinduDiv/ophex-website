import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleBackground from "@/components/animations/ParticleBackground";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const numMatch = value.match(/(\d+)(.*)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : "";

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 3,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, motionValue, target]);

  if (!numMatch) {
    return <span>{value}</span>;
  }

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-charcoal/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-morph" />
      </div>

      {/* Gradient Overlay Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-8 animate-glow-pulse">
              🚀 Transforming Ideas Into Digital Reality
            </span>
          </div> */}

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up mt-20">
            Build Your Digital Future with{" "}
            <span className="text-gradient text-shimmer">OPHEX Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up stagger-2">
            We craft innovative software solutions, stunning websites, and powerful
            applications that drive business growth and deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
            <Button variant="hero" size="lg" asChild className="hover-lift hover-glow">
              <Link to="/#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="hover-lift">
              {/* <Link to="/#portfolio"> */}
              <Link to="/#products">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in stagger-4">
            {[
              { value: "20+", label: "Projects Completed" },
              { value: "10+", label: "Happy Clients" },
              { value: "2+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center stagger-${index + 4}`}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
