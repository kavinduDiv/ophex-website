import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Activity, Target, Shield, Clock, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { contactData } from "@/data/contact";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    // Theme Initialization
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Product Not Found</h2>
        <p className="mb-8 text-muted-foreground max-w-md">
          The product you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-end pb-12 md:pb-20">
        <div className="absolute inset-0 z-0 bg-background">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain md:object-cover object-top md:object-center brightness-[0.4] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <ScrollReveal variant="fade-up">
            <Link to="/#products" className="inline-flex items-center text-primary/80 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/20">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-xl font-medium text-white/90">{product.subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {product.description}
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-transform">
                <Link to="/#contact">
                  Get Started
                  <Rocket className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="backdrop-blur-sm border-white/20 text-white hover:bg-white/10">
                <a
                  href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(`Hello, I would like to request a demo for ${product.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Demo
                  <Activity className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-12 xl:gap-20">

            {/* Left Column: Description & Benefits */}
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal variant="fade-right" delay={100}>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="text-primary" />
                  Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-right" delay={200}>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Shield className="text-primary" />
                  Key Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.benefits?.map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border hover:border-primary/50 transition-colors shadow-sm group">
                      <div className="shrink-0 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="font-medium text-lg leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Features Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal variant="fade-left" delay={300} className="sticky top-24">
                <div className="rounded-3xl bg-card border shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Activity className="text-primary" />
                    Core Features
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 pb-4 border-b last:border-0 border-border/50">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0 animate-pulse" />
                        <span className="text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
                    <h4 className="font-semibold text-lg">Ready to transform your business?</h4>
                    
                    <div className="relative group">
                      {/* Pulsing Background Glow (Does not affect button text opacity) */}
                      <div 
                        className="absolute inset-0 bg-primary/80 rounded-md blur-lg animate-pulse group-hover:bg-primary/90 transition-colors" 
                        style={{ animationDuration: '3s' }} 
                      />
                      <Button 
                        asChild 
                        className="relative z-10 w-full h-12 text-lg bg-primary hover:bg-orange-600 text-white border-[2px] border-orange-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:shadow-[0_0_25px_rgba(249,115,22,0.8)]"
                      >
                        <a 
                          href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(`Hello, I want to discuss the ${product.title} solution for my business.`)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full h-full"
                        >
                          Contact Sales
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" />
                      Typically responds within 2 hours
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container px-4 text-center">
          <ScrollReveal variant="zoom-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We can tailor {product.title} to fit your specific workflow requirements. Let's discuss your unique needs.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all text-lg px-8 h-12">
              <Link to="/#contact">Get in Touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
