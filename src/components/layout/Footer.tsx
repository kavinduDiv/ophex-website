import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import ophexDark from "@/assets/ophex_dark.png";
import ophexLight from "@/assets/ophex_light.png";

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "E-Commerce", href: "/services/ecommerce" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Digital Marketing", href: "/services/marketing" },
    { name: "IoT and AI Integration", href: "/services/iot-ai" },
  ];

  const products = [
    { name: "LMS Platform", href: "/products/lms" },
    { name: "Service Center", href: "/products/service-center" },
    { name: "Stock Management", href: "/products/stock-management" },
  ];

  const company = [
    { name: "About Us", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Technologies", href: "/#technologies" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/#hero">
              <img src={isDark ? ophexDark : ophexLight} alt="OPHEX Software" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into powerful digital solutions. We build innovative
              software that drives business growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/18gXhdbkVd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ophex_software?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                    <span className="transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                    <span className="transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-lg mb-6 mt-8">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                    <span className="transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Tech Park, Silicon Valley,<br />
                  CA 94000, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a href="tel:+94788834962" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+94 78 883 4962</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:ophexsoftwaresolutions@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>ophexsoftwaresolutions@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} OPHEX Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
