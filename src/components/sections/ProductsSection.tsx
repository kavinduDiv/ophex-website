import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import productLms from "@/assets/product-lms.jpg";
import productService from "@/assets/product-service.jpg";
import productStock from "@/assets/product-stock.jpg";

const products = [
  {
    id: "lms",
    title: "LMS Platform",
    subtitle: "Learning Management System",
    description: "A comprehensive e-learning platform to create, manage, and deliver educational content with advanced analytics and engagement tools.",
    icon: BookOpen,
    image: productLms,
    features: [
      "Course Management",
      "Student Progress Tracking",
      "Interactive Assessments",
      "Certificate Generation",
      "Video Conferencing",
      "Mobile Compatible",
    ],
  },
  {
    id: "service-center",
    title: "Service Center",
    subtitle: "Service Management System",
    description: "Streamline your service operations with our powerful ticketing, scheduling, and customer management solution.",
    icon: Wrench,
    image: productService,
    features: [
      "Ticket Management",
      "Customer Database",
      "Service Scheduling",
      "Parts Inventory",
      "Invoice Generation",
      "Performance Reports",
    ],
  },
  {
    id: "stock-management",
    title: "Stock Management",
    subtitle: "Inventory Control System",
    description: "Take full control of your inventory with real-time tracking, automated reordering, and comprehensive reporting.",
    icon: Package,
    image: productStock,
    features: [
      "Real-time Tracking",
      "Barcode Scanning",
      "Multi-location Support",
      "Automated Alerts",
      "Purchase Orders",
      "Detailed Analytics",
    ],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-morph" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Ready-to-Deploy <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful, scalable products designed to transform your business operations 
            and enhance productivity.
          </p>
        </ScrollReveal>

        {/* Products */}
        <div className="space-y-24">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <ScrollReveal
                  variant={isReversed ? "fade-right" : "fade-left"}
                  delay={100}
                  className={isReversed ? "lg:col-start-2" : ""}
                >
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-card-hover hover-lift">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl animate-pulse-slow" />
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal
                  variant={isReversed ? "fade-left" : "fade-right"}
                  delay={200}
                  className={isReversed ? "lg:col-start-1" : ""}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-primary font-medium text-sm">{product.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{product.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8">{product.description}</p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-2 opacity-0 animate-fade-in"
                        style={{ animationDelay: `${(featureIndex + 3) * 100}ms`, animationFillMode: 'forwards' }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="hover-lift hover-glow">
                      <Link to={`/products/${product.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="hover-lift">
                      <Link to="/#contact">Request Demo</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
