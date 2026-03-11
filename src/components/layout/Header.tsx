import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Briefcase, Package, Users, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { contactData } from "@/data/contact";
import ophexDark from "@/assets/ophex_dark.png";
import ophexLight from "@/assets/ophex_light.png";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDark }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/#hero", icon: Home },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Products", href: "/#products", icon: Package },
    // { name: "Portfolio", href: "/#portfolio", icon: ImageIcon },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Contact", href: "/#contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? isDark
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" // Light mode specific styling
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/#hero" className="flex items-center">
            <img
              src={isDark ? ophexDark : ophexLight}
              alt="ORHEX Software"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark / Light Mode Toggle */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button> */}
            <Button variant="default" asChild>
              <Link to="/#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-20 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl z-50 lg:hidden"
              >
                {/* Dropdown Links */}
                <div className="container py-6 flex flex-col gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center gap-4 text-lg font-medium text-foreground/80 hover:text-primary p-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                      >
                        <link.icon className="h-5 w-5 opacity-70" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 mb-2"
                  >
                    <Button variant="default" className="w-full h-12 text-lg shadow-lg shadow-primary/20" asChild>
                      <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                    </Button>
                  </motion.div>

                  {/* Dropdown Footer - Social Links */}
                  <div className="pt-6 mt-2 border-t border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-4 text-center">Connect with us</p>
                    <div className="flex gap-4 justify-center">
                      {[
                        { icon: FaFacebookF, href: contactData.facebook },
                        { icon: FaTwitter, href: contactData.twitter },
                        { icon: FaLinkedinIn, href: contactData.linkedin },
                        { icon: FaInstagram, href: contactData.instagram },
                      ].map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:scale-110"
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </header>
  );
};

export default Header;
