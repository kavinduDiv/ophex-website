import { Link } from "react-router-dom";
import { ArrowRight, Globe, ShoppingCart, Smartphone, Code, Megaphone, Bot } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import serviceWeb from "@/assets/service-web.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceApp from "@/assets/service-app.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceIotAi from "@/assets/service-iot&ai.jpg";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom, responsive websites that captivate visitors and drive conversions.",
    icon: Globe,
    image: serviceWeb,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Powerful online stores that boost sales and streamline operations.",
    icon: ShoppingCart,
    image: serviceEcommerce,
    features: ["Payment Integration", "Inventory Management", "Analytics"],
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Native and cross-platform mobile apps that users love.",
    icon: Smartphone,
    image: serviceApp,
    features: ["iOS & Android", "Cross-Platform", "User-Centric"],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Enterprise-grade software solutions tailored to your needs.",
    icon: Code,
    image: serviceSoftware,
    features: ["Custom Solutions", "Scalable", "Secure"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that maximize your ROI.",
    icon: Megaphone,
    image: serviceMarketing,
    features: ["SEO/SEM", "Social Media", "Analytics"],
  },
  {
    id: "iot-ai",
    title: "IOT and AI Integration",
    description: "Seamlessly connect physical devices with intelligent AI algorithms for smarter operations.",
    icon: Bot,
    image: serviceIotAi,
    features: ["Smart Automation", "Predictive Analytics", "Real-time Monitoring"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-medium" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions That Drive <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive digital solutions to help your business thrive
            in the modern marketplace.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.id}
                variant="zoom-in"
                delay={index * 100}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover-glow h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center animate-pulse-slow">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div
                      className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all mt-auto"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
