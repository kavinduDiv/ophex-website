import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Globe, ShoppingCart, Smartphone, Code, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import serviceWeb from "@/assets/service-web.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceApp from "@/assets/service-app.jpg";
import serviceSoftware from "@/assets/service-software.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

const servicesData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Creating Digital Experiences That Convert",
    description: "We build modern, responsive websites that not only look stunning but also deliver exceptional performance and user experience. Our web solutions are crafted to help your business stand out in the digital landscape.",
    icon: Globe,
    image: serviceWeb,
    features: [
      "Custom responsive design for all devices",
      "Search engine optimization (SEO)",
      "Fast loading and optimized performance",
      "Content management systems (CMS)",
      "Progressive Web Apps (PWA)",
      "E-commerce integration",
    ],
    process: [
      { step: "Discovery", desc: "Understanding your business goals and target audience" },
      { step: "Design", desc: "Creating wireframes and visual designs" },
      { step: "Development", desc: "Building with modern technologies" },
      { step: "Testing", desc: "Rigorous quality assurance" },
      { step: "Launch", desc: "Deployment and go-live" },
      { step: "Support", desc: "Ongoing maintenance and updates" },
    ],
  },
  ecommerce: {
    title: "E-Commerce Solutions",
    subtitle: "Powering Your Online Sales",
    description: "Transform your business with our comprehensive e-commerce solutions. We build online stores that drive sales, enhance customer experience, and streamline your operations.",
    icon: ShoppingCart,
    image: serviceEcommerce,
    features: [
      "Custom storefront design",
      "Secure payment gateway integration",
      "Inventory management system",
      "Order tracking and fulfillment",
      "Customer account management",
      "Analytics and reporting dashboard",
    ],
    process: [
      { step: "Analysis", desc: "Understanding your product catalog and sales goals" },
      { step: "Platform Selection", desc: "Choosing the right e-commerce stack" },
      { step: "Design", desc: "Creating conversion-optimized UI/UX" },
      { step: "Integration", desc: "Payment, shipping, and inventory setup" },
      { step: "Testing", desc: "Transaction and security testing" },
      { step: "Launch", desc: "Go-live and marketing support" },
    ],
  },
  "app-development": {
    title: "App Development",
    subtitle: "Mobile Solutions for Modern Businesses",
    description: "Reach your customers wherever they are with our native and cross-platform mobile applications. We create apps that users love to use and businesses love to own.",
    icon: Smartphone,
    image: serviceApp,
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (Flutter, React Native)",
      "User-centric UI/UX design",
      "Push notifications and engagement",
      "Offline functionality",
      "App Store optimization",
    ],
    process: [
      { step: "Ideation", desc: "Defining app features and user journeys" },
      { step: "Prototyping", desc: "Creating interactive mockups" },
      { step: "Development", desc: "Building the application" },
      { step: "QA Testing", desc: "Device and performance testing" },
      { step: "Deployment", desc: "App store submission" },
      { step: "Iteration", desc: "Continuous improvement based on feedback" },
    ],
  },
  "software-development": {
    title: "Software Development",
    subtitle: "Custom Solutions for Complex Problems",
    description: "We develop enterprise-grade software solutions that automate processes, improve efficiency, and give your business a competitive edge.",
    icon: Code,
    image: serviceSoftware,
    features: [
      "Custom enterprise software",
      "API development and integration",
      "Legacy system modernization",
      "Cloud-native applications",
      "Microservices architecture",
      "DevOps and CI/CD implementation",
    ],
    process: [
      { step: "Requirements", desc: "Detailed technical specifications" },
      { step: "Architecture", desc: "System design and planning" },
      { step: "Development", desc: "Agile sprints with regular demos" },
      { step: "Testing", desc: "Comprehensive QA and security audits" },
      { step: "Deployment", desc: "Staged rollout and migration" },
      { step: "Maintenance", desc: "Ongoing support and enhancements" },
    ],
  },
  marketing: {
    title: "Digital Marketing",
    subtitle: "Driving Growth Through Digital Channels",
    description: "Maximize your online presence and reach your target audience with our data-driven digital marketing strategies that deliver measurable results.",
    icon: Megaphone,
    image: serviceMarketing,
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click advertising (PPC)",
      "Social media marketing",
      "Content marketing strategy",
      "Email marketing campaigns",
      "Analytics and performance tracking",
    ],
    process: [
      { step: "Audit", desc: "Current digital presence analysis" },
      { step: "Strategy", desc: "Custom marketing plan development" },
      { step: "Execution", desc: "Campaign implementation" },
      { step: "Optimization", desc: "Continuous A/B testing" },
      { step: "Reporting", desc: "Monthly performance insights" },
      { step: "Scaling", desc: "Expanding successful campaigns" },
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    window.scrollTo(0, 0);
  }, [serviceId]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/#services"
              className="inline-flex items-center text-primary font-medium mb-8 hover:gap-3 gap-2 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <div className="max-w-4xl">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {service.subtitle}
              </p>
              <p className="text-lg text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.step}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
