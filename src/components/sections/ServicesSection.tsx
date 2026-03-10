import { Link } from "react-router-dom";
import { Globe, ShoppingCart, Smartphone, Code, Megaphone, Bot } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import serviceWeb from "@/assets/services/web-dev-Large.png";
import serviceEcommerce from "@/assets/services/e-com-Large.png";
import serviceApp from "@/assets/services/mobile-Large.png";
import serviceSoftware from "@/assets/services/se-app-Large.png";
import serviceMarketing from "@/assets/services/marketing-Large.png";
import serviceIotAi from "@/assets/services/IoT-Large.png";

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
        <div className="relative w-full max-w-6xl mx-auto pb-12 lg:pb-32">
          {/* Mobile Grid Layer (Visible only on mobile/tablet) */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:hidden w-full">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal
                  key={service.id}
                  variant="zoom-in"
                  delay={index * 100}
                  className={`h-full max-w-sm mx-auto w-full ` + (index % 2 === 0 ? 'mt-0 ' : 'mt-8 sm:mt-12 ')}
                >
                  <ServiceCard service={service} Icon={Icon} />
                </ScrollReveal>
              );
            })}
          </div>

          {/* Desktop Double Triangle Layer (Visible only on desktop) */}
          <div className="hidden lg:flex flex-col gap-12 items-center justify-center w-full">
            {/* Top Row: 3 items staggered with center item lower */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal
                    key={`desktop-top-${service.id}`}
                    variant="fade-up"
                    delay={index * 100}
                    // For an upward triangle, make the center one higher, outers lower.
                    // Actually, "upper two triangles" implies an arrow-like V shape 
                    // Let's do center pushed down to look like a \/ with 3 items
                    className={`w-full ${index === 1 ? 'translate-y-12' : ''}`}
                  >
                    <ServiceCard service={service} Icon={Icon} />
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Bottom Row: 3 items staggered same way below */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mt-6">
              {services.slice(3, 6).map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal
                    key={`desktop-bot-${service.id}`}
                    variant="fade-up"
                    delay={(index + 3) * 100}
                    className={`w-full ${index === 1 ? 'translate-y-12' : ''}`}
                  >
                    <ServiceCard service={service} Icon={Icon} />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted ServiceCard component for reuse in both layouts
const ServiceCard = ({ service, Icon }: { service: any, Icon: any }) => (
  <Link
    to={`/services/${service.id}`}
    className="group relative flex flex-col bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-[2px] backdrop-saturate-[180%] border border-white/15 border-t-white/20 border-l-white/20 rounded-2xl overflow-hidden shadow-card h-full min-h-[220px] lg:min-h-[200px] hover:shadow-card-hover hover:-translate-y-2 duration-300 p-5 sm:p-6"
  >
    {/* Full Inner Frame Line */}
    <div className="absolute inset-2 sm:inset-3 border-2 border-transparent group-hover:border-orange-500 rounded-xl transition-colors duration-500 ease-out z-10 pointer-events-none opacity-0 group-hover:opacity-100" />

    {/* Icon */}
    <div className="relative mb-3 sm:mb-4 z-20">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow relative z-20">
      <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-3 text-xs sm:text-sm flex-grow">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5 mt-auto sm:flex">
        {service.features.map((feature: string) => (
          <span
            key={feature}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] sm:text-xs rounded-sm whitespace-nowrap"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default ServicesSection;
